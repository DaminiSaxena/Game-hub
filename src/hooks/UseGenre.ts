import { UseData } from "./UseData";

export interface Genre{
    name: string;
    id: number;
    image_background: string;
}


export const UseGenre = () => UseData<Genre>("/genres");