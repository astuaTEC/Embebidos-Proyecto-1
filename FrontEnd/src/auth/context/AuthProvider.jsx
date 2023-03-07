import React, { useReducer } from 'react'
import { apiLogin, apiLRegister } from '../../helpers/apiAuthMethods'
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

    const login =  async( { email = '', password = '' }) => {

        const user = {
            id: 'ABC',
            name: 'Saymon'
        };

        const action = {
            type: types.login,
            payload: user
        }

        const resp = await apiLogin({email, password });

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

    const register =  async( { name = '', email = '', password = '' }) => {

        const user = {
            id: 'ABC',
            name
        };

        const action = {
            type: types.login,
            payload: user
        }

        const resp = await apiLRegister({ name, email, password });

        console.log(resp);

        if(!resp){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ya existe un usuario'
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
            logout,
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}
