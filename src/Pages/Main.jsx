import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from './Logo-info.png'

const Main = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(0.11, 0.1, 0.13, 0.75);
    font-family: Montserrat;
    display: flex;

.menu {
    background: rgb(41, 41, 41, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 25vh;
}

.logo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(225deg, #00FF94 0%, #0065C1 100%);
    font-size: 3vh;
    color: white;
    height: 22vh;
}

.logo img {
    width: 12vh;
}

.items {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 31vh;
}

.item {
    color: rgba(255, 255, 255, 0.75);
    font-size: 2vh;
    text-align: center;
    background:  rgb(41, 41, 41);
    border: 1vh solid rgb(41, 41, 41);
    width: 23vh;
    height: 3vh;
}

a {
    color: rgba(255, 255, 255, 0.15);
    text-decoration: none
}

.dev {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    height: 20rem;
    font-size: 2vh;
}

.info {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    color: white;
    line-height: 135%;
}
    
.block {
    display: flex;
    flex-direction: column;
    height: 9rem;
}

.pts {
    display: flex;
    justify-content: space-evenly;
    width: 35rem;
}

.subject1 {
    background: linear-gradient(149.27deg, #00FFD1 -1.87%, #8100E6 121.64%);
    width: 7rem;
    height: 7rem;
}

.subject2 {
    background: linear-gradient(211.38deg, #00FFD1 -1.95%, #8100E6 108.41%);
    width: 7rem;
    height: 7rem;
}

.subname {
    align-self: end;
    vertical-align: bottom;
    line-height: 11.35rem;
    font-size: 0.75rem;
}

.ratings {
    display: flex;
    justify-content: space-evenly;
    width: 51rem;
}

.rating {
    display: flex;
    background: linear-gradient(149.27deg, #00FFD1 -1.87%, #8100E6 121.64%);
    width: 15rem;
    height: 7rem;
}

.title p {
    line-height: 35%;
    text-indent: 1%;
}

.rat5 {
    color: rgba(255, 255, 255, 1);
    width: 7rem;
    font-size: 3rem;
    text-align: end;
}

.rat4 {
    color: rgba(255, 255, 255, 0.95);
    width: 7rem;
    font-size: 3rem;
    text-align: end;
}

.rat3 {
    color: rgba(255, 255, 255, 0.75);
    width: 7rem;
    font-size: 3rem;
    text-align: end;
}
`

export default (() => {
    return (
        <div><Main>
                <div className='menu'>
                    <div className='logo'>
                        <img src={Logo}/>
                        Horizon
                    </div>
                    <div className='items'>
                        <a href='#'><div className='item'>Главная</div></a>
                        <a href='#'><div className='item'>Занятия</div></a>
                        <a href='#'><div className='item'>Расписание</div></a>
                        <a href='#'><div className='item'>Журнал</div></a>
                        <a href='#'><div className='item'>Настройки</div></a><br/>
                    </div>
                    <div className='dev'>
                        <Link to='/'>©ITSea 2020</Link>
                    </div>
                </div>
                <div className='info'>
                    <div className='block'><br/>
                        <div className='title'><p>&emsp;Ближайшие события</p></div>
                        <div className='pts'>
                            &ensp;<div className='subject1'>
                                <p className='subname'>Математика</p>
                            </div>
                            <div className='subject2'>
                                <p className='subname'>Русский язык</p>
                            </div>
                            <div className='subject1'>
                                <p className='subname'>Информатика</p>
                            </div>
                            <div className='subject2'>
                                <p className='subname'>Психология</p>
                            </div>
                        </div>
                    </div><br/>
                    <div className='block'><br/>
                        <div className='title'><p>&emsp;Ваши последние оценки</p></div>
                        <div className='ratings'>
                            &ensp;<div className='rating'>
                                <p className='subname'>Математика</p>
                                <p className="rat5">5</p>
                                
                            </div>
                            <div className='rating'>
                                <p className='subname'>Русский язык</p>
                                <p className='rat3'>3</p>
                            </div>
                            <div className='rating'>
                                <p className='subname'>Информатика</p>
                                <p className='rat4'>4</p>
                            </div>
                        </div>
                    </div><br/>
                    <div className='block'><br/>
                        <div className='title'><p>&emsp;Домашние задания</p></div>
                        <div className='pts'>
                        &ensp;<div className='subject1'>
                                <p className='subname'>Математика</p>
                            </div>
                            <div className='subject2'>
                                <p className='subname'>Русский язык</p>
                            </div>
                            <div className='subject1'>
                                <p className='subname'>Информатика</p>
                            </div>
                            <div className='subject2'>
                                <p className='subname'>Психология</p>
                            </div>
                        </div>
                    </div>
                </div>  
        </Main></div>
    )
})
