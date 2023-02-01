import { useContext, useState } from "react";
import { LoginStyle } from "../styles/FormStyle";

import { Link, useNavigate } from "react-router-dom";
import { CloseButton } from "../components/CloseButton";


import axios from 'axios';
import { GlobalContext } from "../CreateContext";


export const Login = () => {

    

    const { setAuthMessage, setUser } = useContext(GlobalContext);

    const [valueEmail, setValueEmail] = useState("");
    const [valuePassword, setValuePassword] = useState("");



    const navigate = useNavigate();



    const sendLogin = (e) => {
        e.preventDefault();


        axios.post("http://localhost:5000/login", {
            email: e.target.email.value,
            password: e.target.password.value
        })
            .then(response => {
                
                setAuthMessage(true);

                const token = response.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("name", response.data.name);


                axios.get("http://localhost:5000/private", {
                    headers: {
                        authorization: token
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        const name = localStorage.getItem("name");
                        setUser(name);
                        navigate("/");
                        localStorage.setItem("timeexp", response.data.userData.exp);

                    })
                    .catch(err => console.log(err));


            })
            .catch(error => {
                console.log(error);
                alert(error.response.data.error);
            });


    }


    return (
        <LoginStyle >


            <CloseButton />

            <main className="form-container">
                <h1 className="form-title">Login</h1>

                <form className="form-items" method="post" onSubmit={sendLogin}>
                    <div>

                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input-form"
                            placeholder="Digite aqui seu email"
                            value={valueEmail}
                            onChange={(e) => setValueEmail(e.target.value)}
                        />
                        <br />
                        
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
                            value={valuePassword}
                            onChange={(e) => setValuePassword(e.target.value)}
                        />
                        <br />
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