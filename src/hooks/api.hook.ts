
import { useState, useCallback } from 'react';

export const useApi = () => {
    type Process = 'waiting' | 'loading' | 'error' | 'confirmed';

    const [process, setProcess] = useState<Process>('waiting');

    const request = useCallback(async (
        url: string,
        query: string,
        token: string,
        mode: "cors" | "no-cors" = "cors",
        method: "POST" = "POST",
    ) => {
        setProcess('loading');

        try {
            const body: string = JSON.stringify({ query: query });
            const headers: { [key: string]: string } = {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token,
            }

            const response = await fetch(url, { method, mode, headers, body });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (e) {
            setProcess('error');
            throw (e);
        }
    }, [])

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return { request, clearError, process, setProcess };

}