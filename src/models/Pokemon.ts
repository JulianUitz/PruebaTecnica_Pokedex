export interface Pokemon{
    id: number;
    name: string;
    sprites:{
        front_default: string;
        front_shiny: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
}