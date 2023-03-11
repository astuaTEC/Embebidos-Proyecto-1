import { types } from "../types/types";

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

export const houseReducer = ( state = initialState, action ) => {
    var newLights, newDoors; 

    switch (action.type) {
        
        case types.turnOnLights:
            newLights = state.lights.map(light => (
                {
                    state: 'on',
                    id: light.id
                }
            ));

            return {
                ...state,
                lights: newLights
            };

        case types.turnOffLights:
            newLights = state.lights.map(light => (
                {
                    state: 'off',
                    id: light.id
                }
            ));

            return {
                ...state,
                lights: newLights
            }

        case types.turnOnSpecificLight:
            newLights = state.lights.map(d => {
                if(d.id === action.payload){
                    d.state = "on"
                }
                return d;
            })

            return {
                ...state,
                lights: newLights
            }

        case types.turnOffSpecificLight:
            newLights = state.lights.map(d => {
                if (d.id === action.payload) {
                    d.state = "off"
                }
                return d;
            })

            return {
                ...state,
                lights: newLights
            }
        case types.closeSpecificDoor:
            newDoors = state.doors.map(d => {
                if(d.id === action.payload){
                    d.state = "close"
                }
                return d;
            })

            return {
                ...state,
                doors: newDoors
            }

        case types.openSpecificDoor:
            newDoors = state.doors.map(d => {
                if (d.id === action.payload) {
                    d.state = "open"
                }
                return d;
            })

            return {
                ...state,
                doors: newDoors
            }

        case types.logoutHouse:
            return {
                ...initialState
            }

        default:
            return state;
    }
}