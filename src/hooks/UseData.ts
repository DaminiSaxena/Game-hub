import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";
export interface Genre{
    name: string;
    id: number;
}

interface FetchResponse<T>{
    count: number;
    results: T[];
}

export const UseData = <T>(endpoint:string) => {
    
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal} ).then( (res)=>{setData(res.data.results);
        setLoading(false);}).catch(
            (err) => {
                if(err.isInstanceOf(CanceledError)) return ;
                setError(err.message);
                setLoading(false);
            } 
            );
        return () => controller.abort();
    }, []);

    return {data, error, isLoading};
}