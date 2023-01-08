import { Header, HeaderCheck } from "../components/Header"
import { Button, SectionStyle } from "../styles/sectionStyle"

import imageDeveloper from '../images/imagem-programador.png'
import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <Header />
            {/* <HeaderCheck /> */}



            <SectionStyle>
                <div className="welcome-container">
                    <img className="image-developer" src={imageDeveloper} alt="desenvolvedor" />

                    <p className="welcome-paragraph">
                        Olá, seja bem vindo ao meu sistema de cadastro de Usuários!
                    </p>
                </div>

                <div className="action-options">
                    <Link to={"/listagem"}>
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