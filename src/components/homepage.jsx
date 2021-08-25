import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';

// Import do router para transação entre páginas
import { Link } from 'react-router-dom'

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

    // Const do conteúdo digitado no input para pesquisa da hashtag
    const [contentInput, setContentInput] = useState('');
    // Const menssagem validação
    const [error, setError] = useState(null);
    // Const para retirar hashtag
    const [noHashtag, setNoHashtag] = useState('');

    // ----------LIMITE DE CARACTERES DA SEARCH BAR----------

    const lengthInput = contentInput.length; // tamanho do que foi escrito na search bar
    const limitCaracteres = 20 - lengthInput; // limite inicial menos o que for inserido no input


    // ----------ENVIO PARA API DO AIRTABLE----------

    // Função que guarda a URL da Airtable
    function urlAirtable() {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas`;
    }

    // Função que identifica a data em que foi realizada a pesquisa
    function dateInput() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // dia com duas casas
        const month = String(date.getMonth() + 1).padStart(2, '0'); // mês com duas casas
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function hourInput() {
        const date = new Date();
        const hour = String(date.getHours()).padStart(2, '0'); // horas com duas casas
        const minute = String(date.getMinutes()).padStart(2, '0'); // minutos com duas casas
        return `${hour}:${minute}`;
    }

    // Const que resgata o valor preenchido no input
    function handleTextChange(event) {
        setContentInput(event.target.value); // guarda o valor preenchido no content Input
    }

    // Const que resgata do DOM a div de mensagem de validação
    const messageValidation = document.getElementsByClassName('validation');

    // Função de submit do formulário que chama a função para registro na airtable
    function submitForm(event) {
        event.preventDefault(); // evita recarregamento da página

        if (contentInput.length == 0) { // se o campo estiver vazio, impede que seja registrado
            setError('Campo obrigatório!'); // faz aparecer a div com a mensagem de campo obrigatório
        } else {
            setError(null); // div não aparece - não tem conteúdo
            console.log("chama função post")
            console.log('CONTEÚDO DIGITADO', contentInput);


            // postSearch(); // chamda da função que registra na airtable

            // retirada da hashtag para requisição da api do twitter
            let takeOutHash = contentInput;
            searchTweets(takeOutHash.replace(/#/g, ''));
            searchImages(takeOutHash.replace(/#/g, ''));
            setNoHashtag(takeOutHash.replace(/#/g, ''));
            setContentInput('');

        }
    }

    // Função que registra o que foi pesquisado na searchBar na airtable
    // function postSearch() {
    //     axios.post(urlAirtable(), {
    //         "records": [
    //             {
    //                 "fields": {
    //                     "Squad": "52",
    //                     "Hashtag": contentInput, 
    //                     "Data": dateInput(),
    //                     "Hora": hourInput()
    //                 }
    //             }
    //         ]
    //     }, {
    //         headers: {
    //             "Authorization": "Bearer key2CwkHb0CKumjuM",
    //             "Content-Type": "application/json"
    //         }
    //     });
    // }

    // ---------- SEARCH ENGINE - API TWITTER ----------

    // tirar a hashtag da pesquisa
    useEffect(() => {
        searchTweets('');
        searchImages('');
    }, []);


    let [tweets, setTweets] = useState([])
    let [images, setImages] = useState([])

    // função com a URL da searchTweets
    function urlSearchTweets() {
        return `https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q=%27+hashtag+`;
    }

    // função com a URL da searchImages
    function urlSearchImages() {
        return `https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query=%27+hashtag+%27%20has:images&max_results=30&expansions=author_id,attachments.media_keys&media.fields=type,url,width,height`;
    }



    function searchTweets(searchContent) {
        console.log('SEARCH TWEET:', searchContent)
        // let hashtag = document.getElementById('enter').value.replace(/#/g, "")

        axios.get(urlSearchTweets, {
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {
            { setTweets(resp.data.statuses) };

            const users = {};
            resp.data.includes.users.forEach(
                user => {
                    users[String(user.id)] = user.username || '';
                }
            );

            console.log('@USUSARIO :', users)

        });
        console.log('FUNCTION SEARCH TWEETS:', tweets)
    }

    function searchImages(searchContent) {
        console.log('SEARCH IMAGES:', searchContent)
        // let hashtag = document.getElementById('enter').value.replace(/#/g, "")
        axios.get(urlSearchImages, {
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {
            { setImages(resp.data.includes.media) };
        });
        console.log('FUNCTION SEARCH IMAGES:', images)
    }

    // ----------MENU DO TOPO----------
    const [changeBackground, setChangeBackground] = useState(false);

    useEffect(function () {
        function scrollPosition() { //função para verificar a posição do scroll
            if (window.scrollY > 600) { //se o scroll descer mais que 620
                setChangeBackground(true);
            } else {
                setChangeBackground(false);
            }
        }
        window.addEventListener('scroll', scrollPosition);
    }, []);

    // Função para mudar a logo do topo
    function pickLogo() {

        if (changeBackground == 0) { // se não tiver scroll, mostar logo branca
            return logoWhite;
        } if (changeBackground > 0) { // se tiver scroll, mostrar logo rosa
            return logoPink;
        }
    }

    // ----------LISTAGEM DE TWEETS USANDO API DO PICPAY----------
    const [usuario, setUsuario] = useState([]);
    // Consumo da API para listar usuários
    useEffect(() => { /*Evita loop, carrega apenas uma vez*/
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
            .then(res => {
                const user = res.data;
                setUsuario(user);
            })
    }, [])



    return (

        <div>
            <div className="homepage">

                {/* HEADER */}
                <header className="banner">
                    {/* MENU TOPO */}
                    <div className={changeBackground ? 'topUnfixed' : 'topFixed'}>
                        {/* LOGO */}
                        <img src={pickLogo()} alt="Logo" className="logo"></img>
                        {/* BOTÕES DO TOPO */}
                        <div className="buttons">
                            {/* BOTÃO SOBRE */}
                            <Link to="/About" className="linkRoute">
                                <button className="aboutButton">
                                    <img src={logoSobre} alt="logoSobre" className="logoSobre"></img>
                                    <span>Sobre</span>
                                </button></Link>

                            {/* BOTÃO LOGIN */}
                            <Link to="/login" className="linkRoute">
                                <button className="loginButton">
                                    <img src={logoLogin} alt="logoLogin" className="logoLogin"></img>
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
                        <form className="form" onSubmit={submitForm}>
                            <img src={logoSearch} alt="logoSearch" className="logoSearch"></img>
                            <input
                                id="searchBar"
                                name="searchBar"
                                type="text"
                                className="searchBar"
                                value={contentInput}
                                onChange={handleTextChange}
                                placeholder="Buscar..."
                                maxlength="20"
                                data-ls-module="charCounter"
                            >
                            </input>
                            <span className="limitCaracteres">{limitCaracteres}</span>
                        
                        </form>
                    </div>
                    {/* VALIDAÇÃO */}
                    <div className="validation">
                        {/* {<p className="errorMessage">{limitCaracteres}</p>} */}
                    </div>
                    <div className="validation">
                        {error && <p className="errorMessage">{error}</p>}
                    </div>
                </header>

                {/* RESULTADOS DAS IMAGENS - CAROUSEL */}
                <h1 className="searchTitle">Exibindo os 10 resultados mais recentes de #vikings</h1>
                <div className="carouselImages">
                    <Carousel breakPoints={breakPoints}>
                        <Item><img className="resultImage" src={search1} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search2} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search3} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search4} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search5} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search6} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search7} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search8} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search9} alt="img"></img></Item>
                        <Item><img className="resultImage" src={search10} alt="img"></img></Item>
                    </Carousel>
                </div>

                {/* RESULTADOS DOS TWEETS EM TEXTO */}
                <div className="resultPosts">
                    <div className="postContainer">
                        {/* CAIXA QUE CONTÉM O TWEET */}
                        {usuario.map((item) =>
                            <div className="postBox">
                                <img className="postImg" src={item.img} alt="img"></img>
                                <div className="textBoxTweet">
                                    <div className="userBoxTweet">
                                        <p className="postUser">{item.name}</p>
                                        <span className="postUsername">{item.username}</span>
                                    </div>
                                    <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                                    <div className="postLink">Ver mais no Twitter</div>
                                </div>
                            </div>
                        )};

                        {/* CAIXA QUE CONTÉM O TWEET */}
                        {/* <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                    </div>
                    <div className="postContainer">
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div>
                        <div className="postBox">
                            <img className="postImg" src={search1} alt="img"></img>
                            <div className="postUser">UserName</div>
                            <div className="postUsername">@twitterusername</div>
                            <div className="postText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</div>
                            <div className="postLink">Ver mais no Twitter</div>
                        </div> */}
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