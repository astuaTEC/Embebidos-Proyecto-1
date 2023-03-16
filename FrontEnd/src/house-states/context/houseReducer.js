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

        case types.updateAllDoors:
            newDoors = state.doors.map(d => {
                switch (d.id) {
                    case "Comedor":
                        d.state = (action.payload["door1"] === 1) ? 'open' : 'close';
                        return d;
                    case "Cuarto 1":
                        d.state = (action.payload["door2"] === 1) ? 'open' : 'close';
                        return d;
                    case "Cuarto 2":
                        d.state = (action.payload["door3"] === 1) ? 'open' : 'close';
                        return d;
                    case "Jardin":
                        d.state = (action.payload["door4"] === 1) ? 'open' : 'close';
                        return d;
                    default:
                        return d;
                }
            })

            return {
                ...state,
                doors: newDoors
            }

            case types.updateAllLights:
                newLights = state.lights.map(l => {
                    l.state = (action.payload[`${l.id}`] === 1) ? 'on' : 'off';
                    return l;
                })
    
                return {
                    ...state,
                    lights: newLights
                }
    
        default:
            return state;
    }
}