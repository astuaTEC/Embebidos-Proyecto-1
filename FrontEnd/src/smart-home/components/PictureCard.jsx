import React from 'react'

export const PictureCard = ({ src }) => {
    return (
        <>
            <div className="card" style={ {width: "18rem"} }>
                <img className="card-img-top" src={ src } alt="Photo" />
            </div>
        </>
    )
}
