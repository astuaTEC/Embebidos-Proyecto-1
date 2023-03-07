import React, { useReducer } from 'react'
import { apiLogin, apiLRegister } from '../../helpers/apiAuthMethods'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import Swal from 'sweetalert2';
import { loginWithEmailPassword, registerUserWithEmailPassword } from '../../firebase/providers'
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

        const {ok, uid, photoURL, displayName, errorMessage} = await loginWithEmailPassword({email, password});

        if(!ok) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage
              })
            return logout();
        }

        const user = {
            id: uid,
            name: displayName,
            photoURL
        };

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const register =  async( { name = '', email = '', password = '' }) => {

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName: name});

        if(!ok) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage
              })
            return logout();
        }

        const user = {
            id: uid,
            name: name,
            photoURL
        };

        const action = {
            type: types.login,
            payload: user
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
