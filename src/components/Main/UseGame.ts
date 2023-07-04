import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import {CanceledError} from "axios";
import {Game, } from "./GameCard"
export interface Platform{
    name: string;
    id: number;
    slug: string;
}

interface FetchGameResponse{
    count: number;
    results: Game[];
}

export const UseGame = () => {
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchGameResponse>("/games",{signal:controller.signal} ).then( (res)=>{setGames(res.data.results);
        setLoading(false);}).catch(
            (err) => {
                if(err.isInstanceOf(CanceledError)) return ;
                setError(err.message);
                setLoading(false);
            } 
            );
        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
}