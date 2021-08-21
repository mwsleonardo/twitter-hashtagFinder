import React from 'react';
import axios from 'axios';
import './search.css';
import homeIcon from './images_v01/icon-home.svg'
import exitIcon from './images_v01/icon-power-off.svg'
import {Link} from 'react-router-dom'
import loginBg from './imgs/login-bg.jpg'
import { useEffect, useState } from 'react';

function Search() {

    const [hashtagList, setHashtagList] = useState([]); //armazena todos as hashtags buscadas e armazenadas na API

    //requisiçao para API - metodo GET | o useEffect evita que a funçao seja feita infinitamente
    useEffect(() => {

        //funçao será realizada após o componente for renderizado
        axios.get("https://airtable.com/app6wQWfM6eJngkD4/api/docs#curl/table:buscas:list")

        //se a requisiçao der certo, executa o .then
        .then((response) => {
            setHashtagList(response.data)
        })

    }, [])
 
    return (
        <>
        {/* navegador */}   
        <div className="containerSearch">
        <img src={loginBg} className="backgroundImg"></img>

        <div>            
            <div class="header">
                <p class="homeTitle">hashtag<strong>finder</strong></p>
                
                {/* botão HOME */} 
                <Link to="/" className="linkRoute">
                <button class="homeButton">
                    <img src={homeIcon} alt="home-icon"/>
                    HOME
                </button>
                </Link>
                {/* botão SAIR */} 
                <Link to="/" className="linkRoute">
                <button class="exitButton">
                    <img src={exitIcon} alt="home-icon"/>
                    SAIR
                </button>
                </Link>
            </div>

        {/* listagem das hashtags */} 
     <div class="container"> 
        <h1>Buscas realizadas</h1>

            <thead>
                <tr>
                    <th>Hashtag</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>
            </thead>

        {hashtagList.map((hashtag, key) => {

            return (

                <table class= "hashtagList">
                    <tbody>
                        <tr>
                            <td>{hashtag.hashtag}</td>
                            <td>{hashtag.data}</td>
                            <td>{hashtag.hora}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })}
         
    </div> 
    
</div>
</div>
</>

    )
}

export default Search;