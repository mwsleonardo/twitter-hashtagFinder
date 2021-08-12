import React from 'react';
import './homepage.css';
// import homepageFooter from "./imgs/homepageFooter.png"
import logoWhite from "./imgs/logo-white.svg";
import logoSobre from "./imgs/icon-info-circle.svg";
import logoLogin from "./imgs/icon-user-alt.svg";

function Homepage() {

    return (
        <div>
            <div className="homepage">

                <header className="banner">
                    <div className="title">
                        <img src={logoWhite} alt="Logo" class="logo"></img>
                        <div className="buttons">
                            <button className="aboutButton">
                                <img src={logoSobre} alt="logoSobre" class="logoSobre"></img>
                                Sobre
                            </button>
                            <button className="loginButton">
                                <img src={logoLogin} alt="logoLogin" class="logoLogin"></img>
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="textBox">
                        <h1 className="title"> Encontre hashtags de maneira fácil  </h1>
                        <p className="subtitle"> Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo </p>
                    </div>

                    <div className="inputDiv">
                        <input type="text" className="searchBar" placeholder="Buscar..."></input>
                    </div>
                </header>


                <div className="container">
                    <div className="results">
                        <div className="resultsTitle">
                            <div className="resultsImgs"></div>
                            <div className="resultsPosts"></div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    @NewTab Academy 2021. Todos os direitos reservados
                    {/* <img className="footer" src={homepageFooter} /> */}
                </footer>

            </div>

        </div>


    )
}


export default Homepage;