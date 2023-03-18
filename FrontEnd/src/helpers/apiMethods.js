import { getEnvironments } from "./getEnvironments";


const { VITE_BASE_URL } = getEnvironments();


export const apiUpdateLight = async( light, state ) => {
    const url = VITE_BASE_URL + "/light/update";
    
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ area: light, status: state })
            });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {
        console.log(error);
        return null
    }

}


export const updateAllLights = async( state ) => {
    const url = VITE_BASE_URL + "/light/all/change";
    
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ status: state })
            });

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {
        console.log(error);
        return null
    }

}

export const apiGetDoorsState = async( ) => {
    const url = VITE_BASE_URL + "/doors/status";
    
    try {
        const resp = await fetch(url);

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {
        console.log(error);
        return null
    }

}

export const apiGetLigthsState = async( ) => {
    const url = VITE_BASE_URL + "/light/status";
    
    try {
        const resp = await fetch(url);

        if(!resp.ok) throw new Error('Ha surgido un error');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {
        console.log(error);
        return null
    }

}

export const apiTakePhoto = async( ) => {
    const url = VITE_BASE_URL + "/home/getPhoto";
    
    try {
        const resp = await fetch(url, {
            method: "GET",
            redirect: "follow",
            cache: 'no-cache',
        })
        
        if(!resp.ok) throw new Error('No se pudo traer la imagen');

        const blob = await resp.blob();

        const src = URL.createObjectURL(blob);

        return src;

    } catch (error) {
        console.log(error);
        return null
    }

}
