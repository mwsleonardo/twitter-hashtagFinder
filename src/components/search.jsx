import React from 'react';
import './search.css';
import homeIcon from './images_v01/icon-home.svg'
import exitIcon from './images_v01/icon-power-off.svg'
import {Link} from 'react-router-dom'
import loginBg from './imgs/login-bg.jpg'

function Search() {
    

    function logout(){
        localStorage.clear();
    }

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
                <Link to="/login" onClick={logout} className="linkRoute">
                <button onClick={logout} class="exitButton">
                    <img src={exitIcon} alt="home-icon"/>
                    SAIR
                </button>
                </Link>
            </div>

        {/* listagem das hashtags */} 
     <div class="container"> 
        <h1>Buscas realizadas</h1>
        
        <table class= "hashtagList">
            <thead>
                <tr>
                    <th>Hashtag</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
                <tr>
                    <td>#hashtagname</td>
                    <td>25/02</td>
                    <td>09:30</td>
                </tr>
            
            </tbody>
        </table>
    </div> 
    
</div>
</div>
</>

    )
}

export default Search;