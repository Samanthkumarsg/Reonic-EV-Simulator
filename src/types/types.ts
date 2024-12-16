export interface PowerConfig {
    count: number;
    arrivalRate: number;
    utilization: number;
}

export interface ChargingConfig {
    kw11: PowerConfig;
    kw22: PowerConfig;
    kw50: PowerConfig;
}

export interface SimulationResults {
    totalEnergy: number;
    peakPower: number;
    chargingEvents: number;
    hourlyData: {
        hour: string;
        power: number;
    }[];
    dailyData: {
        date: string;
        events: number;
        energy: number;
        peakPower: number;
    }[];
}

export interface SimulatorFormProps {
    activeConfigs: PowerId[];
    config: ChargingConfig;
    availablePowers: AvailablePower[];
    updateConfig: (power: keyof ChargingConfig, field: keyof PowerConfig, value: number) => void;
    removePowerConfig: (powerId: 'kw11' | 'kw22' | 'kw50') => void;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
}


export interface ChargingPointsTypes {
    activeConfigs: PowerId[];
    config: ChargingConfig;
    availablePowers: ChargingPower[];
    addPowerConfig: (powerId: 'kw11' | 'kw22' | 'kw50') => void;
}

export interface InputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    type: 'number' | 'range';
    suffix?: string;
}

export type PowerId = "kw11" | "kw22" | "kw50";


export type ChargingPower = {
    id: string;
    label: string;
    power: number;
    color: string;
    description: string;
};

export type AvailablePower = {
    id: string;
    label: string;
    power: number;
    color: string;
    description: string;
};

export interface ConfigurationSummaryProps {
    activeConfigs: string[];
    availablePowers: ChargingPower[];
    config: ChargingConfig;
    calculateTotalPower: () => number;
    calculatePeakDemand: () => number;
    getTotalChargingPoints: () => number;

}


export interface Props {
    results: SimulationResults;
    config: ChargingConfig;
}