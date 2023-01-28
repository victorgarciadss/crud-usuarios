import { Header, HeaderCheck } from "../components/Header"
import { Button, SectionStyle } from "../styles/sectionStyle"

import imageDeveloper from '../images/imagem-programador.png'
import { Link } from "react-router-dom"

import { useContext } from 'react';
import { GlobalContext } from '../CreateContext';
import { CorrectMessage } from "../components/CorrectMessage";



export const Home = () => {

    const { showMessage, authMessage, user, setUser } = useContext(GlobalContext);
    

    const checkLogin = () => {

        const currentTime = new Date();
        const expirationTime = new Date(localStorage.getItem("timeexp") * 1000);

        

        if(user === null){
            alert("Faça Login antes de visualizar os usuários cadastrados!!");
        }  
        
        else{
            if(currentTime > expirationTime){
                setUser(null);
                alert("Seu tempo de login expirou!! Faça Login novamente");
            }
        }
        
    }

    return(
        <>

            {user !== null ? <HeaderCheck /> : <Header />}
            

            {showMessage && <CorrectMessage action={"cadastrado"}/>}
            {authMessage && <CorrectMessage action={"fez login"} />}

            <SectionStyle>
                
                <div className="welcome-container">
                
                    <img className="image-developer" src={imageDeveloper} alt="desenvolvedor" />

                    <p className="welcome-paragraph">
                        Olá, seja bem vindo ao meu sistema de cadastro de Usuários!
                    </p>
                </div>

                <div className="action-options">
                    <Link onClick={checkLogin} to={user !== null ? "/listagem": null}>
                        <Button>Listar</Button>
                    </Link>
                    

                    <Link to={"/cadastro"}>
                        <Button>Cadastrar</Button>
                    </Link>
                    
                </div>
            </SectionStyle>

        </>
    )
}