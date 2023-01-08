import { CloseButtonStyle } from "../styles/CloseButtonStyle";
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const CloseButton = () => {
    return(
        <CloseButtonStyle>
            <Link to={"/"}>
                <AiOutlineClose  className="close-icon"/>
            </Link>
            
        </CloseButtonStyle>
    );
}