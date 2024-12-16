import { SimulatorFormProps } from "../../types/types";
import Input from "../Form/Input";
import React from 'react'

const SimulatorForm: React.FC<SimulatorFormProps> = ({
    activeConfigs,
    config,
    availablePowers,
    updateConfig,
    removePowerConfig,
    isSubmitting,
    handleSubmit,
}) => {

    return (
        <div className="my-4">
            {
                activeConfigs.length > 0 && (
                    <form onSubmit={handleSubmit} className="bg-white  rounded-xl border border-gray-200 shadow-sm">
                        {/* Active Power Configurations */}
                        <div className='grid grid-cols-1 sm:lg:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6'>
                            {activeConfigs.map(powerId => {
                                const powerConfig = availablePowers.find(p => p.id === powerId)!;
                                return (
                                    <div key={powerId} className={`border border-gray-200 shadow-sm bg-white p-6 rounded-xl relative`}>


                                        <div className="flex flex-row items-start justify-between mb-6 ">
                                            <div className=' flex flex-col items-start justify-center '>
                                                <h1 className="text-md font-semibold font-gray-700">{powerConfig.label} Charging Points</h1>
                                                <p className="text-sm font-normal text-gray-500 mt-1">{powerConfig.description}</p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removePowerConfig(powerId)}
                                                className=" text-red-400 hover:text-red-600"
                                            >
                                                <span className="sr-only">Remove configuration</span>
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex flex-col gap-4 ">
                                            <div className='mb-1'>
                                                <Input
                                                    label="Number of Points"
                                                    value={config[powerId].count}
                                                    onChange={(value) => updateConfig(powerId, 'count', value)}
                                                    min={0} max={50}
                                                    type="number" />
                                            </div>

                                            <div className='mb-1'>
                                                <Input
                                                    label="Arrival Rate in Percentage"
                                                    value={config[powerId].arrivalRate}
                                                    onChange={(value) => updateConfig(powerId, 'arrivalRate', value)}
                                                    min={20}
                                                    max={200}
                                                    type="range"
                                                    suffix="%"
                                                />
                                            </div>

                                            <div className=''>
                                                <Input
                                                    label="Utilization"
                                                    value={config[powerId].utilization}
                                                    onChange={(value) => updateConfig(powerId, 'utilization', value)}
                                                    min={0}
                                                    max={100}
                                                    type="range"
                                                    suffix="%"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Summary - Only show if there are active configurations */}



                        <div className="px-6 pb-6">
                            {/* Submit Button - Only enable if there are active configurations */}
                            <button
                                type="submit"
                                disabled={isSubmitting || activeConfigs.length === 0}
                                className={`  py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
          ${activeConfigs.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'}`}
                            >
                                {isSubmitting ? 'Running Simulation...' : 'Run Simulation'}
                            </button>
                        </div>
                    </form>
                )
            }
        </div>


    )
}

export default SimulatorForm;