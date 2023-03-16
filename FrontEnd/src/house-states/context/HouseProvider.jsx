import { useReducer } from "react";
import { apiGetDoorsState, apiGetLigthsState, apiUpdateLight, updateAllLights } from "../../helpers/apiMethods";
import { types } from "../types/types";
import { HouseContext } from "./HouseContext";
import { houseReducer } from "./houseReducer";


const initialState = {
    doors: [
        {id: "Comedor", state: 'open'},
        {id: "Cuarto 1", state: 'open'},
        {id: "Cuarto 2", state: 'open'},
        {id: "Jardin", state: 'open'},
    ],
    lights: [
        {id: "Comedor", state: 'off'},
        {id: "Cocina", state: 'off'},
        {id: "Cuarto 1", state: 'off'},
        {id: "Cuarto 2", state: 'off'},
        {id: "Sala", state: 'off'},
    ]
}

export const HouseProvider = ({ children }) => {

    const [ homeState, dispatch ] = useReducer( houseReducer, initialState );


    const turnOnLights = async() => {

        const resp = await updateAllLights(1);

        if(!resp) return

        const action = {
            type: types.turnOnLights
        }

        dispatch( action )
    }

    const turnOffLights = async() => {

        const resp = await updateAllLights(0);

        if(!resp) return

        const action = {
            type: types.turnOffLights
        }

        dispatch( action )
    }

    const turnOnSpecificLight = async(light) => {

        const resp = await apiUpdateLight(light, 1);

        if(!resp) return

        const action = {
            type: types.turnOnSpecificLight,
            payload: light
        }

        dispatch( action );
    }

    const turnOffSpecificLight = async(light) => {

        const resp = await apiUpdateLight(light, 0);
        
        if(!resp) return

        const action = {
            type: types.turnOffSpecificLight,
            payload: light
        }

        dispatch( action );
    }

    const getAllDoorsState = async() => {

        const resp = await apiGetDoorsState();

        if(!resp) return

        const { data } = resp;

        const action = {
            type: types.updateAllDoors,
            payload: data
        }

        dispatch( action );
    }

    const getAllLightsState = async() => {

        const resp = await apiGetLigthsState();

        if(!resp) return

        const { data } = resp;

        const action = {
            type: types.updateAllLights,
            payload: data
        }

        dispatch( action );
    }


    const logoutHouse = () => {
        const action = {
            type: types.logoutHouse
        }
        dispatch( action );

        localStorage.clear('lights');
    }

    return (
        <HouseContext.Provider value={{
            ...homeState,
            turnOffLights,
            turnOnLights,
            turnOnSpecificLight,
            turnOffSpecificLight,
            logoutHouse,
            getAllDoorsState,
            getAllLightsState
        }}>
            {children}
        </HouseContext.Provider>
    )

}