import { useContext, useEffect } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { HouseContext } from '../../house-states/context/HouseContext';
import { ButtonsLights } from '../components/ButtonsLights';
import Floorplan from '../components/Floorplan'
import floorplanData from "../helpers/floorplan-data";

export const HomePage = () => {

    const { getAllDoorsState, getAllLightsState } = useContext(HouseContext);

    useInterval(async() => {
        // Your custom logic here
        await getAllDoorsState();
      }, 1500);

    useEffect(() => {
        const fetchData = async () => {
            await getAllLightsState();
        }
        fetchData()
            // make sure to catch any error
            .catch(console.error);

    }, [])
      

    return (
        <>
            <h1>HomePage</h1>
            <hr />

            <div className="container text-center">
                <div className="row">
                    
                    <div className="col-8">
                        <svg
                            viewBox="-1000 -1000 14000 18000"
                            shapeRendering="geometricPrecision"
                        >
                            <Floorplan data={floorplanData} />
                        </svg>
                    </div>

                    <div className="col-2 ms-5 mt-3">
                        
                        <ButtonsLights />

                    </div>
                </div>
            </div>
        </>
    )
}
