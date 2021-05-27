export interface Temperature {
    Value: number
    Unit: "C"
    UnitType: 17
}

export interface Description {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
    PrecipitationType?: string
    PrecipitationIntensity?: string
}

export interface ForecastDto {
    Headline: any
    DailyForecasts: {
        Date: string
        EpochDate: number
        Temperature: {
            Minimum: Temperature
            Maximum: Temperature
        }
        Day: Description
        Night: Description
        Sources: string[]
        MobileLink: string
        Link: string
    }[]
}