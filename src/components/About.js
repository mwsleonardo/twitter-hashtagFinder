import React from 'react';
import './About.css';
import Topo from './topo'

//Icons
import svg from './imgs/about-illustration.svg';
import iconGit from './imgs/icon-github.svg';
import iconEnvelope from './imgs/icon-envelope.svg';
import iconLinkedin from './imgs/icon-linkedin.svg';


export default class About extends React.Component {

    state = {
        aboutText: "",
        list: []
    }

    /* =================  PUXANDO API TEXTO DO PROJETO  --------------*/
    componentDidMount() {
        this.getSobre()
        this.getSquad()
    }

    getSobre() {
        fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')", {
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ aboutText: responseJson.records[0].fields.Sobre })
            })
    }

    /*------  PUXANDO INFOS EQUIPE API  --------------------*/

    getSquad() {
        fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?api_key=key2CwkHb0CKumjuM&filterByFormula=({Squad}='52')", {
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ list: responseJson.records })
                console.log(responseJson)
            })
    }


    render() {


        return (
            <div className="aboutWrapper">
                <div className="aboutHeader">
                    <section className="header">

                                <Topo />
                          
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
                            if (person.fields.Nome != "Leonardo") {
                                return (
                                    <div className="aboutCard" key={'person-card' + index}>
                                        <div className="aboutTeamWrapper">
                                            <div className="aboutPhoto">
                                                <img className="photoAbout" src={person.fields['Imagem'][0].url}></img>
                                            </div>
                                            <h2 className="nameAbout">{person.fields.Nome}</h2>
                                            <p className="descriptionAbout">{person.fields.Descrição}</p>
                                            <div className="aboutSocials">
                                                <a href={person.fields.Github}><img src={iconGit} alt="GitHub" className="iconAbout" /></a>
                                                <a href={person.fields.Email}><img src={iconEnvelope} alt="e-mail" className="iconAbout" /></a>
                                                <a href={person.fields.LinkedIn}><img src={iconLinkedin} alt="Linkedin" className="iconAbout" /></a>
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
