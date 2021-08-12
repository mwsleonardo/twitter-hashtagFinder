import React from 'react';
import "./login.css"

function Login() {




    return (
        <div className="container">
            <div className="headerLogin">  
            <span>Logo</span>
            <button className="butHome"><a href="#">home</a></button> 
            </div>
            <div className="loginBox">
                <span>Login</span>
                <form className="formLogin">
                    <label>Email</label>
                    <input className="itensLogin"/>
                    <label>Senha</label>
                    <input className="itensLogin" type="password"/>
                    <button className="buttonLogin">Acessar</button>
                </form>
            </div>
        </div>
    )
}


export default Login;