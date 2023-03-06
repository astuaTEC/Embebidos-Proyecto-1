import React, { useState } from 'react'
import { getImage } from '../../helpers/getImage'
import { PictureCard } from '../components';

export const CameraPage = () => {

    const [image, setImage] = useState();
    const onTakePhoto = async() => {
        const resp = await getImage();
        setImage(resp);
    }
    
    return (
        <>
            <h1>CameraPage</h1>
            <hr />

            <button onClick={ onTakePhoto } className='btn btn-primary btn-lg btn-block mb-4'>
                Take Photo
            </button>

            <PictureCard src={ image }/>
        </>
    )
}
