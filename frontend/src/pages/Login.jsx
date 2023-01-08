import { LoginStyle } from "../styles/FormStyle";



import { Link } from "react-router-dom";
import { CloseButton } from "../components/CloseButton";


export const Login = () => {

    

    
    return(
        <LoginStyle >


            <CloseButton />

            <main className="form-container">
                <h1 className="form-title">Login</h1>

                <form className="form-items" action="/" method="post">
                    <div>
    
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-form"
                            placeholder="Digite aqui seu email"
                        />
                        <br />
                        <span className="alert-message"></span>
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input-form"
                            placeholder="Digite aqui sua senha"
                        />
                        <br />
                        <span className="alert-message"></span>
                    </div>

                    <button className="button-form">
                        ENTRAR
                    </button>

                </form>

                <Link className="link-login" to={"/cadastro"}>
                    Cadastrar-se
                </Link>
            </main>
        </LoginStyle>
    );
}