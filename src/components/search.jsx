import React from 'react';
import axios from 'axios';
import './search.css';
import homeIcon from './images_v01/icon-home.svg'
import exitIcon from './images_v01/icon-power-off.svg'
import {Link} from 'react-router-dom'
import loginBg from './imgs/login-bg.jpg'
import { useEffect, useState } from 'react';
import InfiniteLoading from "react-simple-infinite-loading";



function Search() {

    
    const [hashtagList, setHashtagList] = useState([...Array(10)].map((_, index) => index)); // guarda as hashtags registradas na API
    //const [hasMoreItems, setHasMoreItems] = useState(true); //determina se há hashtags para carregar

     
    const loadMoreItems = () => {
        const newList = [...Array(10)].map((_, index) => hashtagList.length + index);

     //  const newList = () => {
     //      axios.get("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=%7BSquad%7D+%3D+'52'&//maxRecords=100&pageSize=100&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Hora&//sort%5B1%5D%5Bdirection%5D=asc&timeZone=America/Sao_Paulo&api_key=key2CwkHb0CKumjuM", {
     //     headers: {
     //          "Authorization": "Bearer key2CwkHb0CKumjuM"
     //      }
     //  })
     //  }
    
        return new Promise(resolve => {
          setTimeout(() => {
            setHashtagList([...hashtagList, ...newList]);
            resolve();
          }, 10);
          
        });
      };
        

    useEffect(() => {
        axios.get("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=%7BSquad%7D+%3D+'52'&maxRecords=100&pageSize=100&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=asc&timeZone=America/Sao_Paulo&api_key=key2CwkHb0CKumjuM", {
            headers: {
                "Authorization": "Bearer key2CwkHb0CKumjuM"
            }
        }).then (response => {
                const infos = response.data.records.map (
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
                    console.log(infos);
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
        <div class="containerTitle">
            <h1>Buscas realizadas</h1>
        </div>

        <div class="container"> 
            <thead>
                <tr>
                    <th>Hashtag</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>
            </thead>


        {/* INFINITE LOADING */}
            <InfiniteLoading
                //hasMoreItems={hasMoreItems}
                itemHeight={60} //altura das células da tabela
                loadMoreItems={loadMoreItems} //função que carrega mais resultados depois que o scroll chega no fim da pagina
                >
            {hashtagList.map ((obj, i) => {
                return (
                    <table>
                        <tbody>
                            <tr>
                                <td>{obj.hashtag}</td>
                                <td>{obj.data}</td>
                                <td>{obj.hora}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
            
          </InfiniteLoading>
          
        </div> 
    
    </div>
</div>
</>

    )
}

export default Search;
