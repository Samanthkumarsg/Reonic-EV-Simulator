import React from 'react'
import { ChargingConfig, ChargingPointsTypes, ChargingPower, PowerId } from '../../types/types';

const ChargingPoints: React.FC<ChargingPointsTypes> = ({ activeConfigs, availablePowers, addPowerConfig, config }) => {
    console.log(config)
    return (

        <React.Fragment>
            <div className="flex flex-col items-start justify-between p-6 bg-white rounded-xl border border-gray-200 my-8 top-0 sticky z-10">
                <div className='flex flex-col justify-start items-start'>
                    <h1 className="text-lg font-semibold text-gray-800 mb-1">Reonic EV Charging Points</h1>
                    <h1 className="text-sm font-normal text-gray-500 mb-6">Add a new charging station </h1>
                </div>
                <div className='flex flex-col md:flex-col lg:flex-row-reverse xl:flex-row-reverse flex-wrap gap-4'>
                    {/* Add Power Configuration Button */}
                    {
                        activeConfigs.length < 3 && (
                            <div className="flex flex-row items-start justify-between  p-6 bg-white rounded-xl border border-gray-200 ">
                                <div className='flex flex-col justify-start items-start'>
                                    <h1 className="text-md mb-4 font-medium text-gray-800"> Charging Points</h1>

                                    <div className="flex flex-wrap gap-4">
                                        {availablePowers.map(power => (
                                            !activeConfigs.includes(power.id as PowerId) && (
                                                <button
                                                    key={power.id}
                                                    type="button"
                                                    onClick={() => addPowerConfig(power.id as PowerId)}
                                                    className={`group flex items-center justify-center px-2 py-2 rounded-md text-xs font-medium shadow-sm text-white bg-gray-800  hover:bg-gray-800/95 `}
                                                >
                                                    <svg className="h-4 w-4 mr-2 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    {power.label} point
                                                </button>
                                            )
                                        ))}
                                    </div>
                                </div>






                            </div>

                        )
                    }

                    <div className='flex flex-1 gap-4 items-center justify-end'>
                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-sm/6 font-bold text-gray-800">11 kW </p>
                            </div>
                            <div className='mt-2 flex flex-col items-start justify-start'>
                                <div className="flex flex-row items-center justify-between text-2xl font-semibold text-gray-700 gap-2">
                                    <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                                    </svg>
                                    <p className=''>{config?.kw11?.count} </p>
                                </div>
                                <p className="mt-1 text-xs font-normal text-gray-500">Charging Points</p>
                            </div>
                        </div>

                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-sm/6 font-bold text-gray-800">22 kW </p>

                            </div>
                            <div className='mt-2 flex flex-col items-start justify-start'>
                                <div className="flex flex-row items-center justify-between text-2xl font-semibold text-gray-700 gap-2">
                                    <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                                    </svg>
                                    <p className=''>{config?.kw22?.count} </p>

                                </div>
                                <p className=" mt-1 text-xs font-normal text-gray-500">Charging Points</p>

                            </div>
                        </div>

                        <div className="border border-blue-100 bg-blue-50/5 rounded-lg p-4 shadow-sm">
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-sm/6 font-bold text-gray-800">50 kW </p>

                            </div>
                            <div className='mt-2 flex flex-col items-start justify-start'>
                                <div className="flex flex-row items-center justify-between text-2xl font-semibold text-gray-700 gap-2">
                                    <svg className="w-6 h-6 text-gray-800 stroke-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                                    </svg>
                                    <p className=''>{config?.kw50?.count} </p>
                                </div>
                                <p className="mt-1 text-xs font-normal text-gray-500">Charging Points</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ChargingPoints
