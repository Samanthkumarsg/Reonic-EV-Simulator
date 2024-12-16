import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Props } from '../../types/types';
import ChargingStationVisual from './ChargingStationVisual';
import EVCar from './EVCar';

const SimulationOutput: React.FC<Props> = ({ results, config }: Props) => {
    const [isVisualsOpen, setIsVisualsOpen] = useState(false);

    return (
        <div className=''>
            <div className="my-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div>
                    <div className='flex items-center justify-start mb-8'>
                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-800  flex items-center gap-2">Overview</h3>
                    </div>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 rounded-lg p-4 border">
                            <p className="text-sm font-medium text-gray-600">Total Energy</p>
                            <p className="mt-2 text-xl font-semibold text-gray-800">
                                {Math.round(results.totalEnergy).toLocaleString()} <span className="text-sm font-medium">kWh</span>
                            </p>
                        </div>

                        <div className="bg-gray-50  border rounded-lg p-4">
                            <p className="text-sm font-medium text-gray-600">Peak Power</p>
                            <p className="mt-2 text-xl font-semibold text-gray-800">
                                {Math.round(results.peakPower).toLocaleString()} <span className="text-sm font-medium">kW</span>
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border">
                            <p className="text-sm font-medium text-gray-600">Charging Events</p>
                            <p className="mt-2 text-xl font-semibold text-gray-800">
                                {results.chargingEvents.toLocaleString()} <span className="text-sm font-medium">daily</span>
                            </p>
                        </div>
                    </div>

                    {/* Hourly Power Chart */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100">
                        <h4 className="text-sm font-medium text-gray-700 mb-4">Hourly Power Distribution</h4>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={results.hourlyData}>
                                    <defs>
                                        <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1f2937" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#374151" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="hour"
                                        stroke="#6B7280"
                                        fontSize={12}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="#6B7280"
                                        fontSize={12}
                                        tickLine={false}
                                        tickFormatter={(value) => `${value} kW`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#FFF',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem',
                                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="power"
                                        stroke="#030712"
                                        strokeWidth={2}
                                        fill="url(#powerGradient)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Daily Statistics */}
                    <div className="mt-8 bg-white p-6 rounded-lg border border-gray-100">
                        <h4 className="text-sm font-medium text-gray-700 mb-4">Daily Statistics</h4>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={results.dailyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="date"
                                        stroke="#6B7280"
                                        fontSize={12}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="#6B7280"
                                        fontSize={12}
                                        tickLine={false}
                                        yAxisId="left"
                                        tickFormatter={(value) => `${value} kWh`}
                                    />
                                    <YAxis
                                        stroke="#6B7280"
                                        fontSize={12}
                                        tickLine={false}
                                        yAxisId="right"
                                        orientation="right"
                                        tickFormatter={(value) => `${value} events`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#FFF',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem',
                                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                        }}
                                    />
                                    <Bar dataKey="energy" fill="#6b7280" yAxisId="left" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="events" fill="#4b5563" yAxisId="right" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Visual Representation Accordion */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => setIsVisualsOpen(!isVisualsOpen)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <svg
                                className={`w-5 h-5 text-gray-500 transition-transform ${isVisualsOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <span className="font-medium text-sm text-gray-900">Visual Representation</span>
                        </div>
                        <span className="text-sm text-gray-500">
                            {isVisualsOpen ? 'Hide' : 'Show'} charging stations and vehicles
                        </span>
                    </button>

                    {isVisualsOpen && (
                        <div className="p-6 space-y-6">
                            {/* Show sections only if they have charging points */}
                            {config.kw11.count > 0 && (
                                <div className="space-y-4 flex flex-col">
                                    <h4 className="text-sm font-medium text-gray-800">11kW Charging Stations</h4>

                                    <div className="flex gap-6 flex-col">
                                        <ChargingStationVisual power={11} count={config.kw11.count} isCharging={true} />

                                        <div className="flex flex-wrap items-center gap-3  pb-2">
                                            {Array.from({ length: config.kw11.count }).map((_, i) => (
                                                <EVCar
                                                    key={i}
                                                    isCharging={true}
                                                    batteryLevel={40 + Math.random() * 40}
                                                    carIndex={i}
                                                />
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            )}

                            {config.kw22.count > 0 && (
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-800">22kW Charging Stations</h4>
                                    <div className="flex flex-wrap gap-6">
                                        <ChargingStationVisual power={22} count={config.kw22.count} isCharging={true} />
                                        <div className="flex flex-wrap items-center gap-3  pb-2">
                                            {Array.from({ length: Math.min(config.kw22.count, 8) }).map((_, i) => (
                                                <EVCar
                                                    key={i}
                                                    isCharging={true}
                                                    batteryLevel={30 + Math.random() * 40}
                                                    carIndex={i}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            )}

                            {config.kw50.count > 0 && (
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-800">50kW Charging Stations</h4>
                                    <div className="flex flex-wrap gap-6">
                                        <ChargingStationVisual power={50} count={config.kw50.count} isCharging={true} />
                                        <div className="flex flex-wrap items-center gap-3  pb-2">
                                            {Array.from({ length: Math.min(config.kw50.count, 8) }).map((_, i) => (
                                                <EVCar
                                                    key={i}
                                                    isCharging={true}
                                                    batteryLevel={20 + Math.random() * 40}
                                                    carIndex={i}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SimulationOutput;