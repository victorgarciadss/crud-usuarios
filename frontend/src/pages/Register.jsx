import { CloseButton } from "../components/CloseButton";
import { RegisterStyle } from "../styles/FormStyle";

import { useState, useContext } from "react";
import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from '../CreateContext';

import axios from 'axios';



export const Register = () => {

    const nameRef = useRef(null);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [messagePhone, setMessagePhone] = useState("");
    const [messageEmail, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    const navigate = useNavigate();
    const { setShowMessage } = useContext(GlobalContext);


    const checkPhone = () => {
        if(phone.length < 15){
            setMessagePhone("Você deve inserir seu número completo com DDD");
        }
        else{
            setMessagePhone("");
        }
    }

    const checkEmail = () => {
        const regexEmail = /^[^.@][a-zA-Z0-9.]{2,100}@[a-z]{2,15}\.[a-z]{2,5}$/;
        const result = regexEmail.test(email);

        if(!result){
            setEmailMessage("Email inválido!!");
        }
        else{
            setEmailMessage("");
        }
    }

    const checkPassword = () => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        const result = passwordRegex.test(password);

        if(!result){
            setPasswordMessage("Senha fraca! Deve haver pelo menos 8 caracteres, uma letra e um número");
        }
        else{
            setPasswordMessage("");
        }
    }

    const RegisterUser = (e) => {
        e.preventDefault();


        if(messagePhone === "" && messageEmail === "" && passwordMessage === ""){

            axios.post("http://localhost:5000/register", {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
            .then(response => {
                console.log(response);
                setShowMessage(true);
                navigate("/");
            })
            .catch(err => {
                console.log(err);    
            })
        }

        else{
            alert("Insira todos os dados corretamente antes de cadastrar!");
        }

        
    }
    
    
    return(
        <RegisterStyle>

            <CloseButton />
            <main className="form-container">
                <h1 className="form-title">Cadastro</h1>

                <form
                    className="form-items"
                    onSubmit={RegisterUser}
                    action="/register"
                    method="post"
                >
                    <div>
                        <label htmlFor="name">Nome</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            className="input-form"
                            placeholder="Digite aqui seu nome completo"
                            ref={nameRef}
                            required
                        />
                        <br />
                        <span className="alert-message"></span>
                    </div>

                    <div>
                        <label htmlFor="phone">Telefone</label>
                        <br />
                        <IMaskInput
                            type="text"
                            name="phone"
                            mask={"(00) 90000-0000"}
                            placeholderChar={'#'}
                            className="input-form"
                            unmask={true}
                            placeholder="(xx) 90000-0000"
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={checkPhone}
                            required
                        />
                        <br />
                        <span  className="alert-message">
                            {messagePhone}
                        </span>
                    </div>
                        
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            className="input-form"
                            placeholder="Digite aqui seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={checkEmail}
                            required
                        />
                        <br />
                        <span className="alert-message">{messageEmail}</span>
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="input-form"
                            placeholder="Digite aqui sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={checkPassword}
                            required
                        />
                        <br />
                        <span className="alert-message">{passwordMessage}</span>
                    </div>

                    
                    <button className="button-form">
                        CADASTRAR
                    </button>
                    
                  
                </form>

                <Link className="link-login" to={"/login"}>
                    Fazer Login
                </Link>
            </main>
        </RegisterStyle>
    );
}