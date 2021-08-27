import React from 'react';
import './About.css';
import {Link} from 'react-router-dom'

//Icons
import svg from './imgs/about-illustration.svg';
import iconGit from './imgs/icon-github.svg';
import iconEnvelope from './imgs/icon-envelope.svg';
import iconLinkedin from './imgs/icon-linkedin.svg';
import logoWhite from './imgs/logo-white.svg';
import iconHome from './imgs/icon-home.svg';
import iconUser from './imgs/icon-user-alt.svg';

// Memebers photos
import fotoJu from './imgs/juliana.jpeg';
import fotoGio from './imgs/flavio.jpg';
import fotoFla from './imgs/giovani.jpeg';
import fotoMar from './imgs/eu.jpg';
import fotoLeo from './imgs/leo.jpg';

export default class About extends React.Component{

state = {
    aboutText:"",
    list:[]
  }

  /* =================  PUXANDO TEXTO SOBRE API  --------------*/
  componentDidMount(){
    this.getSobre()
    this.getSquad()
  }

   getSobre(){
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')", {
    })
    .then(response => response.json())
    .then(responseJson => {
        this.setState({aboutText:responseJson.records[0].fields.Sobre})
    })
  }

  /*------  PUXANDO INFOS EQUIPE API  --------------------*/

  getSquad(){
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')", {
    })
    .then(response => response.json())
    .then(responseJson => {
        this.setState({list:responseJson.records})
        console.log(responseJson)
    })
  }

  render() {
    

    return (
        <div className="aboutWrapper">
            <div className="aboutHeader">
                <section className="header">
                    <div className="headerContent">
                        <div className="headerLogo">
                            <img src={logoWhite} className="logoWhite" alt="Logo hashtagfinder" />
                        </div>
                        <div className="headerButtons">
                            <Link to="/" className="linkRoute">    
                            <button className="aboutBtn"><img src={iconHome} alt="icone de busca" />home</button>
                            </Link>
                            <Link to="/login" className="linkRoute">
                            <button className="aboutBtnLogin"><img src={iconUser} alt="icone de usuário" />login</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <h1 className="aboutProject">Sobre o projeto</h1>
            </div>
            <div className="aboutText">
                <div className="aboutAside">
                    <h3>O que é</h3>
                    <p>{this.state.aboutText}</p>
                </div>
                <img src={svg} alt="Logo" className="aboutSvg" />
            </div>
            <h1 className="aboutWe">Quem somos nós</h1>
            <div className="wrapperPhoto">
                <div className="aboutTeam">
                    {this.state.list.map((person, index) => {
                    if(person.fields.Nome != "Leonardo"){
                    return(
                    <div className="aboutCard" key={'person-card' + index}>
                        <div className="about-team-content">
                            <div className="aboutPhoto">
                            <img src={person.fields['Imagem'][0].url}></img>
                            </div>
                            <h2>{person.fields.Nome}</h2>
                            <p>{person.fields.Descrição}</p>
                            <div className="aboutSocials">
                                <img src={iconGit} alt="GitHub" className="iconGit" />
                                <img src={iconEnvelope} alt="e-mail" className="iconEnvelope" />
                                <img src={iconLinkedin} alt="Linkedin" className="iconLinkedin" />
                            </div>
                        </div>
                    </div>
                    )
                }
              })}
                </div>
                
            </div>
            <footer className="footer">
                @NewTab Academy 2021. Todos os direitos reservados
            </footer>
        </div>

    )
}

};
