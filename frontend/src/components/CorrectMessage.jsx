import { CorrectMessageStyle } from "../styles/CorrectMessageStyle"
import { GlobalContext } from '../CreateContext';
import { useContext } from "react";


export const CorrectMessage = ({ action }) => {

    const { showMessage, setShowMessage, confirm, setConfirm } = useContext(GlobalContext);
    
    if(showMessage){
        setTimeout(() => {
            setShowMessage(false);
            
        }, 3000);
    }

    if(confirm){
        setTimeout(() => {
            setConfirm(false);
        }, 3000);
    }

    return(
        <CorrectMessageStyle showMessage={showMessage}>
            <p>Usuário {action} com sucesso!</p>
        </CorrectMessageStyle>
    )
    
}