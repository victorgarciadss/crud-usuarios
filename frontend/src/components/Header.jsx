import { HeaderCheckStyle, HeaderStyle}  from '../styles/headerStyle';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa"

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
    return(
        <HeaderCheckStyle>
            <nav className='container-login'>
                <Link className='link-login' to={"/"}>
                    Logout
                </Link>
                <span className='saudation'>Olá, Victor!</span>
                <span>
                    <FaUserAlt className='icon-user' />
                </span>
            </nav>
        </HeaderCheckStyle>
    );
}