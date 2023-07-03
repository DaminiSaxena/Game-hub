import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import {CanceledError} from "axios";
interface Game{
    name: string;
    id: number;
    background_image: string;
}

interface FetchGameResponse{
    count: number;
    results: Game[];
}

export const UseGame = () => {
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchGameResponse>("/games",{signal:controller.signal} ).then( res=>setGames(res.data.results)).catch(
            (err) => {
                if(err.isInstanceOf(CanceledError)) return ;
                setError(err.message)
            } 
            );
        return () => controller.abort();
    }, []);

    return {games, error};
}