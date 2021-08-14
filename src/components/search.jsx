import React from 'react';
import './search.css';
import homeIcon from './images_v01/icon-home.svg'
import exitIcon from './images_v01/icon-power-off.svg'


function Search() {

    return (
        <>
        <div>
            <div class="header">
                <p class="homeTitle">hashtag<strong>finder</strong></p>
                <button class="homeButton">
                    <img src={homeIcon} alt="home-icon"/>
                    HOME
                </button>
                <button class="exitButton">
                    <img src={exitIcon} alt="home-icon"/>
                    SAIR
                </button>
        </div>

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
</>

    )
}

export default Search;