import { ConfigurationSummaryProps } from "../../types/types";

const ConfigurationSummary: React.FC<ConfigurationSummaryProps> = ({
    activeConfigs,
    availablePowers,
    config,
    calculateTotalPower,
    calculatePeakDemand,
    getTotalChargingPoints,
}) => {

    return (
        <div className="">
            {/* Summary to show if there are active configurations */}
            {activeConfigs.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm ">

                    <div className='flex items-center justify-start mb-8'>
                        <svg className="w-5 h-5 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-800  flex items-center gap-2">Configuration Summary</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-sm font-medium text-gray-800">Total Maximum Power</p>
                                <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className='mt-4 flex flex-col items-start justify-start '>
                                <p className=" text-2xl font-semibold text-gray-700">
                                    {calculateTotalPower().toLocaleString()} <span className="text-sm font-medium">kW</span>
                                </p>

                                <p className="mt-1 text-sm font-normal text-gray-500">Maximum theoretical output</p>
                            </div>
                        </div>


                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-sm font-medium text-gray-800">Estimated Peak Demand</p>
                                <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div className='mt-4 flex flex-col items-start justify-start '>
                                <p className=" text-2xl font-semibold text-gray-700">
                                    {calculatePeakDemand().toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="text-sm font-medium">kW</span>
                                </p>
                                <p className="mt-1 text-sm font-normal text-gray-500">Based on utilization rates</p>
                            </div>
                        </div>


                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-sm font-medium text-gray-800">Total Charging Points</p>
                                <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className='mt-4 flex flex-col items-start justify-start '>
                                <p className=" text-2xl font-semibold text-gray-700">
                                    {getTotalChargingPoints().toLocaleString()} <span className="text-sm font-medium">points</span>
                                </p>
                                <p className="mt-1 text-sm font-normal text-gray-500">Across all power levels</p>
                            </div>
                        </div>

                    </div>

                    {/* Per Power Level Breakdown */}
                    <div className="mt-6 border-t border-gray-100 py-6">
                        <h4 className="text-sm font-medium text-gray-600 mb-4">Breakdown by Power Level</h4>
                        <div className="space-y-3">
                            {activeConfigs.map(powerId => {
                                const powerConfig = availablePowers.find(p => p.id === powerId)!;
                                const power = powerConfig.power * config[powerId].count;
                                return (
                                    <div key={powerId} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full bg-${powerConfig.color}-500`} />
                                            <span className="text-sm text-gray-600">{powerConfig.label}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-gray-500">{config[powerId].count} points</span>
                                            <span className="text-sm font-medium text-gray-900">{power.toLocaleString()} kW</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>



                </div>
            )}
        </div>
    )
}

export default ConfigurationSummary;

