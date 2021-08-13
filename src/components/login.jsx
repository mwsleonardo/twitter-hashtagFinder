import React from 'react';
import "./login.css"

function Login() {




    return (
        <div className="container">
            <img src="/images/login-bg.jpg" className="backgroundImg"></img>
            <div className="headerLogin">
                <img src="/images/logo-white.svg" className="itensHeader"></img>
                <button className="butHome itensHeader"><img src="/images/icon-home.svg"></img> <a href="#">home</a></button>
            </div>
            <div className="loginBox">
                <h1 className="titleBox">Login</h1>
                <form className="formLogin">
                    {/* <label>Email</label> */}
                    <input className="itensLogin" placeholder="Email" />
                    {/* <label>Senha</label> */}
                    <input className="itensLogin" type="password" placeholder="Senha" />
                </form>
                <button className="buttonLogin">Acessar</button>
            </div>
        </div>
    )
}


export default Login;