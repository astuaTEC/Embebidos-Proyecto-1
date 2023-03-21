import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks';

import './LoginPage.css';
import Swal from 'sweetalert2';


const loginFormFiels = {
    loginEmail: '',
    loginPassword: ''
}

const registerFormFiels = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}

export const LoginPage = () => {

    const { login, register } = useContext(AuthContext);

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFiels);
    const {
        registerName,
        registerEmail,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange
    } = useForm(registerFormFiels);


    const navigate = useNavigate();


    const loginSubmit = async(event) => {
        event.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';

        await login({ email: loginEmail, password: loginPassword});
        
        navigate(lastPath, {
            replace: true
        })
    }

    const registerSubmit = async(event) => {
        event.preventDefault();
        if( registerPassword !== registerPassword2){
            Swal.fire("Error en registro", "Contrasenas no son iguales", 'error');
            return;
        }
        await register({ name: registerName, email: registerEmail, password: registerPassword });
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2" >
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
