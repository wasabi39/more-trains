(function () {
    const api = window.SubwayBuilderAPI;

    console.log('[More Trains] Loaded!');

    api.hooks.onGameInit(() => {
        api.ui.showNotification('More Trains Mod is active!', 'success');
    });

    api.trains.registerTrainType({
        id: 'high-speed-metro',
        name: 'High Speed Metro',
        description: 'Very fast and expensive metro for longer distances. Modelled after Guangzhou Metro Line 18.',
        stats: {
            maxAcceleration: 0.8,
            maxDeceleration: 1.0,
            maxSpeed: 56, // m/s (~125 mph)
            maxSpeedLocalStation: 15,
            capacityPerCar: 80,
            carLength: 26,
            minCars: 8,
            maxCars: 16,
            carsPerCarSet: 8,
            carCost: 4_000_000,
            trainWidth: 3.0,
            minStationLength: 180,
            maxStationLength: 240,
            baseTrackCost: 60_000,
            baseStationCost: 120_000_000,
            trainOperationalCostPerHour: 800,
            carOperationalCostPerHour: 80,
            scissorsCrossoverCost: 20_000_000,
            stopTimeSeconds: 30,
            parallelTrackSpacing: 4,
            trackClearance: 1.2,
            maxLateralAcceleration: 1,
            minTurnRadius: 100,
            minStationTurnRadius: 2000,
            maxSlopePercentage: 3.5,
        },
        compatibleTrackTypes: ['high-speed-metro'],
        appearance: {
            color: '#8b5cf6'
        }
    });


})();