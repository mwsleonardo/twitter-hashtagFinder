import { useState } from 'react';
import "./login.css"
import loginBg from './imgs/login-bg.jpg'
import logoWhite from './imgs/logo-white.svg'
import iconHome from './imgs/icon-home.svg'
import { Link } from 'react-router-dom'

function Login() {

    const [campos, setCampos] = useState('');
    const [campos2, setCampos2] = useState('');
    const [error, setError] = useState(null);

    function validateCampos (value) {
        if (value.length === 0) {
            setError('Preencha este campo.');
            return false;
        } else {
            setError(null);
            return true;
        }

    }

    function validateCampos2 (value) {
        if (value.length === 0) {
            setError('Preencha este campo.');
            return false;
        } else {
            setError(null);
            return true;
        }

    }


    function handleBlur({ target }) {
        validateCampos(target.value);
        validateCampos2(target.value);
    }

    function handleChange({ target }) {
        if (error) validateCampos(target.value);

        setCampos(target.value);
        setCampos2(target.value);
    }

    return (
        <div className="containerLogin">
            <img src={loginBg} className="backgroundImg"></img>
            <div className="headerLogin">
                <img src={logoWhite} className="itensHeader"></img>
                <Link to="/"><button className="butHome itensHeader"><img src={iconHome}></img> <span>Home</span></button></Link>
            </div>
            <div className="loginBox" >
                <h1 className="titleBox">Login</h1>
                <form className="formLogin">
                    <input className="itensLogin" placeholder="Usuário" value={campos} onChange={handleChange} onBlur={handleBlur} />
                    {error && <p className="invalidUser">{error}</p>}
                    <input className="itensLogin" type="password" value={campos2} onChange={handleChange} onBlur={handleBlur} placeholder="Senha" />
                    {error && <p className="invalidUser">{error}</p>}
                </form>
                <button className="buttonLogin" onClick={ handleChange}> Acessar</button>
            </div>
        </div>
    )
}


export default Login;