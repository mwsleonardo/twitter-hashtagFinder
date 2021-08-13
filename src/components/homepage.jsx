import React from 'react';
import './homepage.css';

// Import do carousel e styled-components(css) das imagens 
import Carousel from "react-elastic-carousel";
import Item from './item.js';

// Import das imagens e icones usados na homepage
import logoWhite from "./imgs/logo-white.svg";
import logoSobre from "./imgs/icon-info-circle.svg";
import logoLogin from "./imgs/icon-user-alt.svg";
import logoSearch from "./imgs/icon-search.svg"

// Import das imagens teste para o resultado da busca
import search1 from "./imgsSearch/search1.png";
import search2 from "./imgsSearch/search2.png";
import search3 from "./imgsSearch/search3.png";
import search4 from "./imgsSearch/search4.png";
import search5 from "./imgsSearch/search5.png";
import search6 from "./imgsSearch/search6.png";
import search7 from "./imgsSearch/search7.png";
import search8 from "./imgsSearch/search8.png";
import search9 from "./imgsSearch/search9.png";
import search10 from "./imgsSearch/search10.png";

// Const para a "quebra de linha" do resultado das imagens
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];


// Function retornando todo o conteúdo da homepage
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
                        <img src={logoSearch} alt="logoSearch" class="logoSearch"></img>
                        <input type="text" className="searchBar" placeholder="Buscar..."></input>
                    </div>
                </header>


                <h1 className="searchTitle">Exibindo os 10 resultados mais recentes de #vikings</h1>
                <div className="carouselImages">
                    <Carousel breakPoints={breakPoints}>
                        <Item><img className="resultImage" src={search1}></img></Item>
                        <Item><img className="resultImage" src={search2}></img></Item>
                        <Item><img className="resultImage" src={search3}></img></Item>
                        <Item><img className="resultImage" src={search4}></img></Item>
                        <Item><img className="resultImage" src={search5}></img></Item>
                        <Item><img className="resultImage" src={search6}></img></Item>
                        <Item><img className="resultImage" src={search7}></img></Item>
                        <Item><img className="resultImage" src={search8}></img></Item>
                        <Item><img className="resultImage" src={search9}></img></Item>
                        <Item><img className="resultImage" src={search10}></img></Item>
                    </Carousel>
                </div>
                <div className="imageResult1">teste</div>
                <footer className="footer">
                    @NewTab Academy 2021. Todos os direitos reservados
                </footer>
            </div>
        </div>


    )
}


export default Homepage;