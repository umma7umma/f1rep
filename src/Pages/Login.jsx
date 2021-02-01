import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from './Logo.png'

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                linear-gradient(225deg, #00FF94 0%, #0065C1 100%), #F2F2F2;
    height: 100vh; 
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 25vw;
    height: 63vh;
    background: #3C3E44;
    border-radius: 1rem;

.auth {
    font-family: Montserrat;
    font-size: 0.75em;
    color: white;
    opacity: 0.9;
}

input {
    width: 18vw;
    height: 3vh;
    background: #2f3136;
    border-radius: 1vh;
    opacity: 0.55;
}

a {
    text-decoration: none;
    font-family: Montserrat;
    color: #2E9ED0;
}

.help {
    font-size: 0.7em;
}

input:focus {
    outline: none;
}
`;

export default (() => {
    return (
        <div><Main>
            <div><Box>
                <div className='logo'>
                    <p><br/><Link to='/Main'><img src={Logo}/></Link></p>
                </div>
                <div className='auth'><br/>
                &ensp;Логин<br/>
                    <input></input>
                </div>
                <div className='auth'>
                &ensp;Пароль<br/>
                    <input></input>
                </div>
                <div className='help'>
                    <br/><Link to='/Host'>Забыли пароль?</Link>
                </div>
                <div></div>
            </Box></div>
        </Main></div>
    )
})
