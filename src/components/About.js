import React from 'react';
import './About.css';
//import NavMenu from './NavManu.jsx';
//import Footer from './Footer.jsx';
import svg from './imgs/about-illustration.svg';
import iconGit from './imgs/icon-github.svg';
import iconEnvelope from './imgs/icon-envelope.svg';
import iconLinkedin from './imgs/icon-linkedin.svg';
import logoWhite from './imgs/logo-white.svg';
//import iconHome from './imgs/icon-home.svg';

function About() {

    return (
        <div className="aboutWrapper">
            <div className="aboutHeader">
                <header className="header">
                <img src={logoWhite} alt="Logo" className="logoWhite"/>
                
                </header>
                <h1 className="aboutProject">Sobre o projeto</h1>
            </div>
            <div className="aboutText">
                <div className="aboutAside">
                    <h3>O que é</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <img src={svg} alt="Logo" className="aboutSvg"/>
            </div>
            <h1 className="aboutWe">Quem somos nós</h1>
            <div className="wrapperPhoto">
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src="https://avatars.githubusercontent.com/u/59779741?s=400&u=91664f144491831e26d045a20b5bf30bb964359d&v=4"/>
                            </div>
                            <h2>NomeSobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                            <img src={iconGit} alt="GitHub" className="iconGit"/>
                            <img src={iconEnvelope} alt="e-mail" className="iconEnvelope"/>
                            <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src="https://avatars.githubusercontent.com/u/59779741?s=400&u=91664f144491831e26d045a20b5bf30bb964359d&v=4"/>
                            </div>
                            <h2>NomeSobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                            <img src={iconGit} alt="GitHub" className="iconGit"/>
                            <img src={iconEnvelope} alt="e-mail" className="iconEnvelope"/>
                            <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src="https://avatars.githubusercontent.com/u/59779741?s=400&u=91664f144491831e26d045a20b5bf30bb964359d&v=4"/>
                            </div>
                            <h2>NomeSobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                            <img src={iconGit} alt="GitHub" className="iconGit"/>
                            <img src={iconEnvelope} alt="e-mail" className="iconEnvelope"/>
                            <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src="https://avatars.githubusercontent.com/u/59779741?s=400&u=91664f144491831e26d045a20b5bf30bb964359d&v=4"/>
                    
                            </div>
                            <h2>NomeSobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                            <img src={iconGit} alt="GitHub" className="iconGit"/>
                            <img src={iconEnvelope} alt="e-mail" className="iconEnvelope"/>
                            <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutTeam">
                    <div className="aboutCard">
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                                <img src="https://avatars.githubusercontent.com/u/59779741?s=400&u=91664f144491831e26d045a20b5bf30bb964359d&v=4"/>
                            </div>
                            <h2>NomeSobrenome</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore er dolore</p>
                            <div className="aboutSocials">
                            <img src={iconGit} alt="GitHub" className="iconGit"/>
                            <img src={iconEnvelope} alt="e-mail" className="iconEnvelope"/>
                            <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <footer>
            <div className="footerBackground">
            <span className="footerText">
            @Cocreare 2021. Todos os direitos reservados
            </span>
        </div>
            </footer>
        </div>    
        
        )
    }
    
    
    export default About;

