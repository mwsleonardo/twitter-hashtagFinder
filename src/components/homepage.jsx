import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './item.js';

import './homepage.css';
import logoWhite from "./imgs/logo-white.svg";
import logoSobre from "./imgs/icon-info-circle.svg";
import logoLogin from "./imgs/icon-user-alt.svg";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



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


                <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
            <div className="carouselImages">
            <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
            </Carousel>
      </div>







                <footer className="footer">
                    @NewTab Academy 2021. Todos os direitos reservados
                </footer>

            </div>

        </div>


    )
}


export default Homepage;