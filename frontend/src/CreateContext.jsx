import { createContext, useEffect, useState } from "react"



export const GlobalContext = createContext();

const CreateProvider = ({ children }) => {


    const [showMessage, setShowMessage] = useState(false);
    const [editContainer, setEditContainer] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [authMessage, setAuthMessage] = useState(false);
    const [user, setUser] = useState(null);

    const [auth, setAuth] = useState(false);
    
    
    
    useEffect(() => {
        const name = localStorage.getItem("name");

        const currentTime = new Date();
        const expirationTime = new Date(localStorage.getItem("timeexp") * 1000);
        
        setUser(name);

        if(currentTime > expirationTime){
            localStorage.clear();
            setUser(null);
        }
    
    }, []);


    return (
        <GlobalContext.Provider value={
            {
                showMessage, setShowMessage,
                editContainer, setEditContainer,
                confirm, setConfirm,
                authMessage, setAuthMessage,
                user, setUser,
                auth, setAuth,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default CreateProvider;