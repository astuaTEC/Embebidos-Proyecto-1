import React from 'react'
import Floorplan from '../components/Floorplan'
import floorplanData from "../helpers/floorplan-data";

export const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <hr />

            <svg
                viewBox="-1000 -1000 14000 18000"
                shapeRendering="geometricPrecision"
            >
                <Floorplan data={floorplanData} />
            </svg>
        </>
    )
}
