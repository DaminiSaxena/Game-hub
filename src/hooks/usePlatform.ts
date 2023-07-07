import { UseData } from "./UseData";

export interface Platform{
    name: string;
    id: number;
    slug: string;
}


export const usePlatform = () => UseData<Platform>("/platforms/lists/parents");