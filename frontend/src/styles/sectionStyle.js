import styled from 'styled-components';

export const SectionStyle = styled.section`
    /* background-color: #00ff00; */
    
    .welcome-container{
        margin-top: 30px;
        width: 1000px;
        height: 260px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        
    }

    .image-developer{
        width: 440px;
        height: 260px;
    }

    .welcome-paragraph{
        font-size: 2rem;
        color: #227fbb;
        display: flex;
        align-items: center;
        font-weight: bold;
    }

    .action-options{
        margin-top: 2rem;
        width: 500px;
        height: 204px;
        /* border: 2px solid black; */
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    
`

export const Button = styled.button`
    width: 500px;
    height: 90px;
    background-color: #227fbb;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    
`

export const ListSectionStyle = styled.section`
    color: #ffffff;
    display: flex;
    flex-direction: column;

    .container-user{
        width: 640px;
        height: 160px;
        background-color: #227fbb;
        margin-left: 3rem;
        margin-top: 40px;
        margin-bottom: 30px;
        padding: 0;
        display: flex;
        
    }

    .container-data{
        width: 520px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .paragraph-content{
        margin-left: 3rem;
        font-size: 1.5rem;
        padding-top: 0;
        
    }

    .atribute{
        font-weight: bold;
    }

    .container-actions{
        display: flex;
        flex-direction: column;
        width: 120px;
        align-items: center;
        justify-content: space-evenly;
    }

    .icon-action{
        font-size: 45px;
        display: flex;
    }

    
`