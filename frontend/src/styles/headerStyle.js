import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 90px;
    background-color: #227fbb;
    display: flex;
    justify-content: end;
    
    

    .container-login{
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .link-login{
        color: #eeeeee;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
    }

    .icon-user{
        height: 65px;
        width: 60px;
        gap: 3rem;
        color: #ffffff;
    }
`

export const HeaderCheckStyle = styled(HeaderStyle)`
    .container-login{
        width: 400px;
        justify-content: space-around;
    }

    .saudation{
        color: #ffffff;
        font-weight: bold;
        font-size: 1.5rem;
    }
`
