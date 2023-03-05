

export const apiLogin = async( body ) => {
    const url = `http://localhost:5000/login`;
    
    try {

        const resp = await fetch(url, {
            method: 'POST',
            body: body
        });

        if(!resp.ok) throw new Error('No se pudo iniciar sesion');

        const respJson = await resp.json();
        
        return respJson;

    } catch (error) {
        // console.log(error);
        // throw new Error(error.message);
        return body;
        //return null;
    }

}