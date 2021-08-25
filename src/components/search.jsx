import React from 'react';
import axios from 'axios';
import './search.css';
import homeIcon from './images_v01/icon-home.svg'
import exitIcon from './images_v01/icon-power-off.svg'
import {Link} from 'react-router-dom'
import loginBg from './imgs/login-bg.jpg'
import { useEffect, useState } from 'react';

function Search() {
    
    const [hashtagList, setHashtagList] = useState([]);  //armazena as hashtags registradas na API


useEffect(() => {
    axios.get("https://airtable.com/app6wQWfM6eJngkD4/api/docs#curl/table:buscas:list", {
        headers: {
            "Authorization": "Bearer key2CwkHb0CKumjuM"
        }
    }).then (
        response => {
            const infos = response.data.records.map(
                info => {
                    return {
                        "squad": '52',
                        "hashtag": info.fields.Hashtag,
                        "data": info.fields.Data,
                        "hora": info.fields.Hora
                    }
                }
            )
                setHashtagList(infos);
        }
    )
}, []);


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

            {infos.map ((item, i) => {
                return (
                    <table>
                    <tbody>
                        <tr>
                            <td>{infos.Hashtag}</td>
                            <td>{infos.Data}</td>
                            <td>{infos.Hora}</td>
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
