import { Component, useState } from 'react';
import "./login.css"
import loginBg from './imgs/login-bg.jpg'
import logoWhite from './imgs/logo-white.svg'
import iconHome from './imgs/icon-home.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import api from './apiLogin';


    

function Login() {

    useEffect(()=>{
        api.get('').then(({data})=>{
    }) 
    },[])

    // Const menssagem validação
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    // Inputs no form 
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    function submitForm(event) {
        // event.preventDefault(); // evita recarregamento da página
        if (userInput.length == 0){ // se o campo estiver vazio, impede que seja registrado
            // Campo não preechido 
            setError('Campo obrigatório!'); // Aparece mensagem de erro
            event.preventDefault();
            return false;
        } else if (passwordInput.length == 0){
            // Campo não preechido 
             setError('') 
             setError2('Campo obrigatório!') // Aparece mensagem de erro 
             event.preventDefault();
        } else {
            // Mensagem de erro é apagada 
            setError(null); 
            setError2(null);
            console.log(onchange)
            return true;
        } 
    }

    

    function handleTextChange(event) {
        setUserInput(event.target.value); // guarda o valor preenchido no content Input
    }

    function handleTextChange2(event) {
        setPasswordInput(event.target.value); // guarda o valor preenchido no content Input
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
                    <input
                        className="itensLogin"
                        placeholder="Usuário"
                        value={userInput} // valor do input 
                        onChange={handleTextChange}  // guarda o valor preenchido 
                        />
                        {error && <p className="invalidUser">{error}</p>}
                    <input
                        className="itensLogin"
                        type="password"
                        value=""
                        placeholder="Senha"
                        value={passwordInput} // valor do input 
                        onChange={handleTextChange2} // guarda o valor preenchido
                        />
                        {error2 && <p className="invalidUser">{error2}</p>}
                </form>
                <Link to="/search"><button className="buttonLogin"onClick={submitForm}> Acessar</button></Link>
            </div>
        </div>
    )
}


export default Login;
