
import { UseData } from "./UseData";
export interface Platform{
    name: string;
    id: number;
    slug: string;
}

export interface Game {
    name: string;
    id: number;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
}


export const UseGame = () => UseData<Game>("/games");