declare interface APIArgs {
    apiAccountKey: apiAccountKey,
    apiDataset: apiDataset
}

declare interface APIDatasets {
    [propName: string]: string;
}

declare interface APIConstructorArgs {
    readonly apiAccountKey: string,
    readonly apiDataset:
        'BusArrivalv2'
        | 'BusRoutes'
        | 'BusStops'
        | 'Taxi-Availability'
        | 'TrainServiceAlerts'
        | 'CarParkAvailabilityv2'
        | 'ERPRates'
        | 'EstTravelTimes'
        | 'FaultyTrafficLights'
        | 'RoadOpenings'
        | 'RoadWorks'
        | 'Traffic-Images'
        | 'TrafficIncidents'
        | 'TrafficSpeedBands'
        | 'VMS',
    readonly apiResponseFormat?: 
        'json'
        | 'xml'
        | 'atom+xml' 
        | 'application/json' 
        | 'application/atom+xml',
    readonly apiParams: object,
}