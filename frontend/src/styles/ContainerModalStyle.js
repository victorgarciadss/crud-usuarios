import styled from 'styled-components';

export const ContainerEditStyle = styled.section`
    width: 600px;
    background-color: #cecece;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;

    .container-edit-info{
        margin: 10px;
    }

    .input-edit{
        margin-top: 0.5rem;
        height: 30px;
        width: 565px;
        padding-left: 10px;
        border: 2px solid #958A8A;
        background-color: #dfe1e4;
    }

    .container-button{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
    }

    .action-button{
        width: 150px;
        height: 30px;
        font-size: 1rem;
        margin-right: 10px;
        background-color: #345EEA;
        color: #ffffff;
        border: none;
        border-radius: 5px;
    }

    .action-button:hover{
        background-color: #4040ee;
        cursor: pointer;
    }
`

export const ContainerDeleteStyle = styled.section`
    width: 400px;
    height: 200px;
    background-color: #cecece;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    

    .container-button{
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
    }
    
    .button{
        width: 80px;
        height: 30px;
        background-color: #345EEA;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    
    
    
`