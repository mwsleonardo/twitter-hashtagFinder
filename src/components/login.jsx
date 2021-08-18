import React from 'react';
import "./login.css"
import loginBg from './imgs/login-bg.jpg'
import logoWhite from './imgs/logo-white.svg'
import iconHome from './imgs/icon-home.svg'

function Login() {

    return (
        <div className="container">
            <img src={loginBg} className="backgroundImg"></img>
            <div className="headerLogin">
                <img src={logoWhite} className="itensHeader"></img>
                <button className="butHome itensHeader"><img src={iconHome}></img> <a href="#">home</a></button>
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