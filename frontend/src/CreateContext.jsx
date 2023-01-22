import { createContext, useState } from "react"

export const GlobalContext = createContext();

const CreateProvider = ({children}) => {
    const [showMessage, setShowMessage] = useState(false);
    const [editContainer, setEditContainer] = useState(false);
    const [confirm, setConfirm] = useState(false);


    return(
        <GlobalContext.Provider value={
            {showMessage,
             setShowMessage,
              editContainer,
               setEditContainer,
               confirm,
               setConfirm
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default CreateProvider;