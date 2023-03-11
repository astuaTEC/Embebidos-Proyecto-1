import { useReducer } from "react";
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


    const turnOffLights = () => {

        const action = {
            type: types.turnOffLights
        }

        dispatch( action )
    }

    const turnOnSpecificLight = (light) => {

        const action = {
            type: types.turnOnSpecificLight,
            payload: light
        }

        dispatch( action );
    }

    const turnOffSpecificLight = (light) => {

        const action = {
            type: types.turnOffSpecificLight,
            payload: light
        }

        dispatch( action );
    }

    const turnOnLights = () => {

        const action = {
            type: types.turnOnLights
        }

        dispatch( action )
    }

    const openSpecificDoor = (door) => {
        const action = {
            type: types.openSpecificDoor,
            payload: door
        }
        dispatch( action );
    }

    const closeSpecificDoor = (door) => {
        const action = {
            type: types.closeSpecificDoor,
            payload: door
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
            openSpecificDoor,
            closeSpecificDoor,
            logoutHouse
        }}>
            {children}
        </HouseContext.Provider>
    )

}