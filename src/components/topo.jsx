import React, { useState, useEffect } from 'react';
import './topo.css';

// Import das imagens e icones usados na homepage
import logoWhite from "./imgs/logo-white.svg";
import logoPink from "./imgs/logo-pink.svg";
import logoSobre from "./imgs/icon-info-circle.svg";
import logoLogin from "./imgs/icon-user-alt.svg";

// Import do router para transação entre páginas
import { Link } from 'react-router-dom'

function Topo() {

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

    return (
        <>

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
        </>
    )
}

export default Topo;