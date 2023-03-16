
import React, { useContext, useState } from 'react'
import { HouseContext } from '../../house-states/context/HouseContext';



const lightsInitState = {
    "Cocina": false,
    "Comedor": false,
    "Cuarto 1": false,
    "Cuarto 2": false,
    "Sala": false
}


export const ButtonsLights = () => {


    const { turnOnLights, turnOffLights, turnOnSpecificLight,
        turnOffSpecificLight } = useContext(HouseContext);

    const [allLightsState, setAllLightsState] = useState( JSON.parse(localStorage.getItem('lights')) || lightsInitState);

    const onTurnOnLights = () => {
        turnOnLights();
        const newStateLights = { };
        for (const [key] of Object.entries( allLightsState)) {
            newStateLights[`${key}`] = true;
        }
        setAllLightsState(newStateLights);
        localStorage.setItem('lights', JSON.stringify(newStateLights));
    }

    const onTurnOffLights = () => {
        turnOffLights();
        setAllLightsState(lightInitState);
        localStorage.setItem('lights', JSON.stringify(allLightsState));
    }

    const onToggleSpecificLight = ( light ) => {
        const lightState = allLightsState[light];
        if(!lightState){
            turnOnSpecificLight(light);
        } else {
            turnOffSpecificLight(light);
        }
        const newStateLights = {...allLightsState, [`${light}`]: !lightState};
        setAllLightsState(newStateLights);
        localStorage.setItem('lights', JSON.stringify(newStateLights));
    }

    return (
        <>
            <h2>Control de Luces</h2>
            <hr />

            <div className="row">
                <button className='btn btn-primary me-2' onClick={onTurnOnLights}>
                    Encender Luces
                </button>
            </div>

            <div className="row">
                <button className='btn btn-primary mt-1' onClick={onTurnOffLights}>
                    Apagar Luces
                </button>
            </div>

            <div className="row">
                <button className='btn btn-secondary mt-5' onClick={() => onToggleSpecificLight("Cocina")}>
                    Luz Cocina
                </button>
            </div>

            <div className="row">
                <button className='btn btn-secondary mt-1' onClick={() => onToggleSpecificLight("Comedor")}>
                    Luz Comedor
                </button>
            </div>

            <div className="row">
                <button className='btn btn-secondary mt-1' onClick={() => onToggleSpecificLight("Sala")}>
                    Luz Sala
                </button>
            </div>

            <div className="row">
                <button className='btn btn-secondary mt-1' onClick={() => onToggleSpecificLight("Cuarto 1")}>
                    Luz Cuarto 1
                </button>
            </div>

            <div className="row">
                <button className='btn btn-secondary mt-1' onClick={() => onToggleSpecificLight("Cuarto 2")}>
                    Luz Cuarto 2
                </button>
            </div>
        </>
    )
}
