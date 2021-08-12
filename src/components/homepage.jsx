import React from 'react';
import './homepage.css'
import homepageFooter from "./imgs/homepageFooter.png"
import logoWhite from "./imgs/logo-white.svg"
// Ícones do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

function Homepage() {

    return (
        <div>
            <div className="homepage">

                <header className="banner">
                    <div className="title">
                        <img src={logoWhite} alt="Logo" class="logo"></img>
                        <div className="buttons">
                            <button className="aboutButton"> <FontAwesomeIcon icon={faInfoCircle} /> Sobre </button>
                            <button className="loginButton"> <FontAwesomeIcon icon={faUserAlt} /> Login </button>
                        </div>
                    </div>
                    <div className="textBox">
                        <h1 className="title"> Encontre hashtags de maneira fácil  </h1>
                        <p className="subtitle"> Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo </p>
                    </div>

                    <input type="text" clasName="searchBar"></input>

                </header>


                <div className="container">
                    <div className="results">
                        <div className="resultsTitle">
                            <div className="resultsImgs"></div>
                            <div className="resultsPosts"></div>
                        </div>
                    </div>
                </div>

                <footer>
                    <img className="footer" src={homepageFooter} />
                </footer>

            </div>

        </div>


    )
}


export default Homepage;