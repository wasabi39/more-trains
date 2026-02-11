(function () {
    const api = window.SubwayBuilderAPI;

    console.log('[More Trains] Loaded!');

    api.hooks.onGameInit(() => {
        api.ui.showNotification('More Trains Mod is active!', 'success');
    });

    window.SubwayBuilderAPI.trains.registerTrainType({
        id: 'high-speed-metro',
        name: 'High Speed Metro',
        description: 'Very fast and expensive metro for longer distances. Modelled after Guangzhou Metro Line 18.',
        stats: {
            maxAcceleration: 1.3,
            maxDeceleration: 1.3,
            maxSpeed: 44, // m/s (~90 mph)
            maxSpeedLocalStation: 15,
            capacityPerCar: 300,
            carLength: 20,
            minCars: 5,
            maxCars: 10,
            carsPerCarSet: 5,
            carCost: 4_000_000,
            trainWidth: 3.0,
            minStationLength: 180,
            maxStationLength: 240,
            baseTrackCost: 60_000,
            baseStationCost: 150_000_000,
            trainOperationalCostPerHour: 800,
            carOperationalCostPerHour: 80,
            scissorsCrossoverCost: 20_000_000
        },
        compatibleTrackTypes: ['high-speed-metro'],
        appearance: {
            color: '#8b5cf6'
        }
    });


})();