import { getEnvironments } from "./getEnvironments";


const { VITE_BASE_URL } = getEnvironments();


export const setOnLight = async( light ) => {
    const url = VITE_BASE_URL + "/light/update";
    
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({area:"4", status:"1"})
            });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {

        throw new Error(error);
    }

}

export const setOffLight = async( light ) => {
    const url = VITE_BASE_URL + "/light/off";
    
    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: { light: light }
        });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {

        throw new Error(error);
    }

}

export const setOnAllLights = async( ) => {
    const url = VITE_BASE_URL + "/light/on";
    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: { light: "all" }
        });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {

        throw new Error(error);
    }

}


export const setOffAllLights = async( ) => {
    const url = VITE_BASE_URL + "/light/off";
    
    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: { light: "all" }
        });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {

        throw new Error(error);
    }

}