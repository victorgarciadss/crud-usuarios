import styled from 'styled-components';

export const LoginStyle = styled.main`
    background-color: #227fbb;
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* align-items: center;
    justify-content: center; */

    

    .form-container{
        margin: auto;
        background-color: #ffffff;
        width: 500px;
        height: 550px;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .form-title{
        text-align: center;
        font-size: 32px;
        margin-top: 2rem;
    }

    .form-items{
        width: 390px;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .input-form{
        margin-top: 5px;
        width: 380px;
        height: 50px;
        font-size: 1rem;
        padding-left: 10px;
        background-color: #dfe1e4;
        border: 2px solid #958A8A;
    }

    .alert-message{
        position: fixed;
        color: #ff0000;
        font-size: 12px;
    }

    .input-form:focus{
        outline: 0;
        border: 2px solid #4f4b4b;
    }

    .button-form{
        background-color: #345EEA;
        height: 50px;
        width: 180px;
        border: none;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        font-size: 16px;
        color: #ffffff;
        font-weight: bold;
        margin-top: 40px;
        cursor: pointer;
    }

    .link-login{
        text-align: center;
        color: #000000;
        font-weight: bold;
        margin-top: 5px;
    }
`

export const RegisterStyle = styled(LoginStyle)`
    .form-items{
        margin-top: 5px;
        gap: 1rem;
    }

    .input-form{
        margin-top: 0;
    }

    .button-form{
        margin-top: 15px;
    }
`