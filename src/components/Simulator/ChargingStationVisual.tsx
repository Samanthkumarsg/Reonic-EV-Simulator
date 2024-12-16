
const ChargingStationVisual: React.FC<{
    power: number;
    count: number;
    isCharging?: boolean;
}> = ({ power, count, isCharging = false }) => {


    return (
        <div className="flex flex-rpw items-start justify-start gap-4">
            <div className={`bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium`}>
                EV Point · {power}kW
            </div>
            <div className={`bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium`}>
                Charging Points · {count} {count === 1 ? 'Station' : 'Stations'}
            </div>

        </div >
    );
}

export default ChargingStationVisual