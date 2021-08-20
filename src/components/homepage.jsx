import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';

// Import do hook form para validação 
// npm install react-hook-form
import { useForm } from 'react-hook-form';

// Import do router para transação entre páginas
import { Link } from 'react-router-dom'
// Import do redirecionamento depois de algum evento
import { useHistory } from 'react-router-dom';

// Import do carousel e styled-components(css) das imagens 
import Carousel from "react-elastic-carousel";
import Item from './item.js';

// Import das imagens e icones usados na homepage
import logoWhite from "./imgs/logo-white.svg";
import logoPink from "./imgs/logo-pink.svg";
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
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];


// Function retornando todo o conteúdo da homepage
function Homepage() {

    // Const do hook form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Const hook de redirecionamento de página
    const history = useHistory();

    // Const com conteúdo a ser enviado pra airtable
    const values = {
        "records": [
            {
                "fields": {
                    "squad": "52",
                    "Hashtag": "natureza",
                    "Data": "26/05/2021",
                    "Hora": "19:43",
                }
            }
        ]
    }

    // AULA SOBRE AXIOS E CORS
    // https://drive.google.com/file/d/17otxC8fNWxrDumqadGxe_aKyLjkuQEM7/view

    let url = "https://cors.bridged.cc/https://api.airtable.com/v0app6wQWfM6eJngkD4/Buscas";

    // Axios para POST da airtable
    let axiosConfig = { 
        headers: { 
            Authorization: "Bearer key2CwkHb0CKumjuM" , 
            'Content-Type': 'application/json' ,
        } 
    }
    axios.post(
        url,
        values,
        axiosConfig
    )
    .then(() => {
        console.log("rolou")
    })
    .catch(() => {
        console.log("não rolou")
    })

    // LINK API
    // https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas

    // Const que resgata o valor preenchido no input
    const onSubmit = data => console.log(data);

    // ---------MENU DO TOPO---------
    const [changeBackground, setChangeBackground] = useState(false);

    useEffect(function() {
        function scrollPosition(){ //função para verificar a posição do scroll
            if(window.scrollY > 600){ //se o scroll descer mais que 600
                setChangeBackground(true);
            } else {
                setChangeBackground(false);
            }
        }
        window.addEventListener('scroll', scrollPosition);
    }, []);


    return (

        <div>
            <div className="homepage">

                {/* HEADER */}
                <header className="banner">
                    {/* MENU TOPO */}
                    <div className={ changeBackground ? 'topUnfixed' : 'topFixed' }>
                        {/* LOGO */}
                        <img src={ logoWhite } alt="LogoWhite" className="logo"></img>
                        {/* BOTÕES DO TOPO */}
                        <div className="buttons">
                            {/* BOTÃO SOBRE */}
                            <Link to="/About" className="linkRoute">
                                <button className="aboutButton">
                                    <img src={logoSobre} alt="logoSobre" class="logoSobre"></img>
                                    <span>Sobre</span>
                                </button></Link>

                            {/* BOTÃO LOGIN */}
                            <Link to="/login" className="linkRoute">
                                <button className="loginButton">
                                    <img src={logoLogin} alt="logoLogin" class="logoLogin"></img>
                                    <span>Login</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* CAIXA DE TEXTO DO BANNER */}
                    <div className="textBox">
                        <h1 className="title"> Encontre hashtags de maneira fácil  </h1>
                        <p className="subtitle"> Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo </p>
                    </div>

                    {/* FORM E CAMPO DE BUSCA */}
                    <div className="inputDiv">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <img src={logoSearch} alt="logoSearch" class="logoSearch"></img>
                            <input
                                name="searchBar"
                                {...register("searchBar", { required: true, maxLength: 40 })}
                                type="text"
                                className="searchBar"
                                placeholder="Buscar..."
                                maxlength="40"
                            >
                            </input>
                        </form>
                    </div>
                    {/* VALIDAÇÃO */}
                        <div className="validation">
                            {errors.searchBar?.type === 'required' && "Campo obrigatório"}
                        </div>
                </header>

                {/* RESULTADOS DAS IMAGENS - CAROUSEL */}
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

                {/* RESULTADOS DOS TWEETS EM TEXTO */}
                <div className="resultPosts">
                    <div className="postContainer">
                        {/* CAIXA QUE CONTÉM O TWEET */}
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        {/* CAIXA QUE CONTÉM O TWEET */}
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1}></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <footer className="footer">
                    @NewTab Academy 2021. Todos os direitos reservados
                </footer>
            </div>
        </div>
    )
}

export default Homepage;