import React, { useContext, useState } from 'react'
import { HouseContext } from '../../house-states/context/HouseContext';
import Floorplan from '../components/Floorplan'
import floorplanData from "../helpers/floorplan-data";

export const HomePage = () => {

    const [allLightsState, setAllLightsState] = useState(true);
    const [allDoorsState, setAllDoorsState,] = useState(true);

    const { doors, turnOnLights, turnOffLights, openSpecificDoor, closeSpecificDoor } = useContext(HouseContext);

    const onToggleLights = () => {
        if(allLightsState){
            turnOnLights();
        }
        else {
            turnOffLights();
        }

        setAllLightsState(!allLightsState);
    }

    const onToggleDoors = () => {
        if(allDoorsState){
            openSpecificDoor("Jardin");
        }
        else {
            closeSpecificDoor("Jardin");
        }

        setAllDoorsState(!allDoorsState);
    }

    return (
        <>
            <h1>HomePage</h1>
            <hr />

            <button className='btn btn-secondary me-2' onClick={ onToggleLights }>
                Toggle Lights
            </button>

            <button className='btn btn-secondary ms-2' onClick={ onToggleDoors }>
                Toggle Doors
            </button>

            <svg
                viewBox="-1000 -1000 22000 18000"
                shapeRendering="geometricPrecision"
            >
                <Floorplan data={floorplanData} />
            </svg>

            
        </>
    )
}
