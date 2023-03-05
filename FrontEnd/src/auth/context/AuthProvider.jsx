import React, { useReducer } from 'react'
import { apiLogin } from '../../helpers/apiAuthMethods'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import Swal from 'sweetalert2';
// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }

}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login =  async( name = '') => {

        const user = {
            id: 'ABC',
            name
        };

        const action = {
            type: types.login,
            payload: user
        }

        const resp = await apiLogin({email: 'a@email.com', password: '12345'});

        console.log(resp);

        if(!resp){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Credenciales incorrectas'
              })
            return;
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout
        }

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
