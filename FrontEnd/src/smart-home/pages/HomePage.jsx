import { ButtonsLights } from '../components/ButtonsLights';
import Floorplan from '../components/Floorplan'
import floorplanData from "../helpers/floorplan-data";

export const HomePage = () => {


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
