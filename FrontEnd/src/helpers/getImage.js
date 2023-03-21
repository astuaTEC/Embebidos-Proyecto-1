

export const getImage = async() => {
    const url = `https://picsum.photos/500`;
    
    try {

        const resp = await fetch(url);

        if(!resp.ok) throw new Error('No se pudo traer la imagen');

        console.log(resp);

        const blob = await resp.blob();

        const src = URL.createObjectURL(blob);

        return src;

    } catch (error) {
        // console.log(error);
        // throw new Error(error.message);
        return null;
    }

}