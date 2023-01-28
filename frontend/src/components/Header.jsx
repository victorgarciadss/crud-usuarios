import { HeaderCheckStyle, HeaderStyle}  from '../styles/headerStyle';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa"
import { useContext } from 'react';
import { GlobalContext } from '../CreateContext';


export const Header = () => {
    return (
        
        <HeaderStyle>
            <nav className='container-login'>
                <Link className='link-login' to={"/login"}>
                    Login
                </Link>
                <span>
                    <FaUserAlt className='icon-user' />
                </span>
            </nav>
        </HeaderStyle>

    );
}


export const HeaderCheck = () => {

    
    const { user, setUser } = useContext(GlobalContext);

    const userLogout = () => {
        setUser(null);
        localStorage.clear();
    }

    return(
        <HeaderCheckStyle>
            <nav className='container-login'>
                <Link onClick={userLogout} className='link-login' to={"/"}>
                    Logout
                </Link>
                <span className='saudation'>Olá, {user}!</span>
                <span>
                    <FaUserAlt className='icon-user' />
                </span>
            </nav>
        </HeaderCheckStyle>
    );
}