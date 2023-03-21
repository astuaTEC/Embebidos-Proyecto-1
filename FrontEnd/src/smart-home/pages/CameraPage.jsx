import React, { useState } from 'react'
import { apiTakePhoto } from '../../helpers/apiMethods';
import { PictureCard } from '../components';

export const CameraPage = () => {

    const [image, setImage] = useState();

    const onTakePhoto = async() => {
        const res = await apiTakePhoto();
        setImage(res);
    }
    
    return (
        <>
            <h1>CameraPage</h1>
            <hr />

            <button onClick={ async () => await onTakePhoto() } className='btn btn-primary btn-lg btn-block mb-4'>
                Take Photo
            </button>
            
            {
                !!image ? <PictureCard src={ image }/> : ''
            }
            
        </>
    )
}
