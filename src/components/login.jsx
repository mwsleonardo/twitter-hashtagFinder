import React from 'react';
import "./login.css"
import loginBg from './imgs/login-bg.jpg'
import logoWhite from './imgs/logo-white.svg'
import iconHome from './imgs/icon-home.svg'
import {Link} from 'react-router-dom'

function Login() {

    return (
        <div className="containerLogin">
            <img src={loginBg} className="backgroundImg"></img>
            <div className="headerLogin">
                <img src={logoWhite} className="itensHeader"></img>
                <Link to="/"><button className="butHome itensHeader"><img src={iconHome}></img> <span>Home</span></button></Link>
            </div>
            <div className="loginBox">
                <h1 className="titleBox">Login</h1>
                <form className="formLogin">
                    <input className="itensLogin" placeholder="Usuário"  />
                    <input className="itensLogin" type="password" placeholder="Senha" />
                </form>
                <button className="buttonLogin">Acessar</button>
            </div>
        </div>
    )
}


export default Login;