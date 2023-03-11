import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { HouseContext } from '../../house-states/context/HouseContext';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const { logoutHouse } = useContext(HouseContext);

    const navigate = useNavigate();

    const onLogout = async() => {
        await logout();
        logoutHouse();
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <span className='navbar-brand'>
                <i className="fa-solid fa-house"></i>
            </span>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/camera"
                    >
                        Camera
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        { user?.name }
                    </span>

                    <button className='btn btn-outline-danger ms-2' onClick={onLogout}>
                        <i className='fas fa-sign-out-alt'></i>
                        &nbsp;
                        <span>Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}