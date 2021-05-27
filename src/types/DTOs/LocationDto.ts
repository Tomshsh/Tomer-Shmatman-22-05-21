export interface LocationDto{
    Version: number;
    Key: string;
    Type: "City";
    Rank: number;
    LocalizedName: string;
    Country: {
        ID: string;
        LocalizedName: string;
    }
    AdministrativeArea: {
        ID: string;
        LocalizedName: string;
    }
}