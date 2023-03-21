
export const PictureCard = ({ src }) => {
    return (
        <>
            <div className="card" style={ {width: "50rem"} }>
                <img className="card-img-top" src={ src } alt="Photo" />
            </div>
        </>
    )
}
