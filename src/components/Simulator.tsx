import React, { useState } from "react"

import { ChargingConfig, ChargingPower, PowerConfig, SimulationResults } from '../types/types';
import SimulatorForm from "./Form/SimulatorForm";
import ChargingPoints from "./Simulator/ChargingPoints";
import ConfigurationSummary from "./Simulator/ConfigurationSummary";
import SimulationOutput from "./Simulator/SimulatorOutput";


const Simulator: React.FC = () => {
    const [activeConfigs, setActiveConfigs] = useState<('kw11' | 'kw22' | 'kw50')[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [results, setResults] = useState<SimulationResults | null>(null);

    const [config, setConfig] = useState<ChargingConfig>({
        kw11: { count: 0, arrivalRate: 100, utilization: 60 },
        kw22: { count: 0, arrivalRate: 100, utilization: 60 },
        kw50: { count: 0, arrivalRate: 100, utilization: 60 }
    });

    const availablePowers: ChargingPower[] = [
        { id: 'kw11', label: '11kW', power: 11, color: 'blue', description: 'Standard AC charging for longer parking durations' },
        { id: 'kw22', label: '22kW', power: 22, color: 'sky', description: 'Fast AC charging for medium duration stays' },
        { id: 'kw50', label: '50kW', power: 50, color: 'teal', description: 'Rapid DC charging for quick charging needs' },
    ];

    const addPowerConfig = (powerId: 'kw11' | 'kw22' | 'kw50') => {
        if (!activeConfigs.includes(powerId)) {
            setActiveConfigs([...activeConfigs, powerId]);
        }
    };

    const removePowerConfig = (powerId: 'kw11' | 'kw22' | 'kw50') => {
        setActiveConfigs(activeConfigs.filter(id => id !== powerId));
        setConfig({
            ...config,
            [powerId]: { count: 0, arrivalRate: 100, utilization: 60 }
        });
    };

    const updateConfig = (
        power: keyof ChargingConfig,
        field: keyof PowerConfig,
        value: number
    ) => {
        setConfig({
            ...config,
            [power]: {
                ...config[power],
                [field]: value
            }
        });
    };

    const calculateTotalPower = () => {
        return activeConfigs.reduce((total, powerId) => {
            const powerLevel = availablePowers.find(p => p.id === powerId)!.power;
            return total + (config[powerId].count * powerLevel);
        }, 0);
    };

    const calculatePeakDemand = () => {
        return activeConfigs.reduce((total, powerId) => {
            const powerLevel = availablePowers.find(p => p.id === powerId)!.power;
            return total + (config[powerId].count * powerLevel * (config[powerId].utilization / 100));
        }, 0);
    };

    const getTotalChargingPoints = () => {
        return activeConfigs.reduce((total, powerId) => total + config[powerId].count, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const totalPower = calculateTotalPower();
            const avgUtilization = activeConfigs.reduce((avg, powerId) =>
                avg + (config[powerId].utilization / 100), 0) / activeConfigs.length;
            const avgArrivalRate = activeConfigs.reduce((avg, powerId) =>
                avg + (config[powerId].arrivalRate / 100), 0) / activeConfigs.length;

            const mockResults: SimulationResults = {
                totalEnergy: totalPower * 24 * avgUtilization,
                peakPower: calculatePeakDemand(),
                chargingEvents: Math.floor(activeConfigs.reduce((total, powerId) =>
                    total + (config[powerId].count * (config[powerId].arrivalRate / 100)), 0) * 24),
                hourlyData: Array.from({ length: 24 }, (_, i) => ({
                    hour: `${String(i).padStart(2, '0')}:00`,
                    power: calculatePeakDemand() * (0.3 + Math.random() * 0.5)
                })),
                dailyData: Array.from({ length: 7 }, (_, i) => ({
                    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
                    events: Math.floor(getTotalChargingPoints() * avgArrivalRate * 24),
                    energy: totalPower * 24 * avgUtilization * (0.5 + Math.random() * 0.3),
                    peakPower: calculatePeakDemand() * (0.7 + Math.random() * 0.2)
                })).reverse()
            };
            setResults(mockResults);
        } catch (error) {
            console.error('Simulation failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="">
            <ChargingPoints
                activeConfigs={activeConfigs}
                availablePowers={availablePowers}
                addPowerConfig={addPowerConfig}
                config={config}
            />
            <SimulatorForm
                activeConfigs={activeConfigs}
                config={config}
                availablePowers={availablePowers}
                updateConfig={updateConfig}
                removePowerConfig={removePowerConfig}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit} />

            <ConfigurationSummary
                activeConfigs={activeConfigs}
                availablePowers={availablePowers}
                config={config}
                calculateTotalPower={calculateTotalPower}
                calculatePeakDemand={calculatePeakDemand}
                getTotalChargingPoints={getTotalChargingPoints}

            />
            {results && <SimulationOutput results={results} config={config} />}

        </div>
    )
}

export default Simulator