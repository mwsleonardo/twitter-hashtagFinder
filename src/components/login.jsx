import { useState } from 'react';
import "./login.css"
import loginBg from './imgs/login-bg.jpg'
import logoWhite from './imgs/logo-white.svg'
import iconHome from './imgs/icon-home.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

    // Const menssagem validação
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    // Inputs no form 
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    let [modalShow, setShowModal] = useState(false);

    function submitForm(event) {
        // event.preventDefault(); // evita recarregamento da página
        if (userInput.length == 0) { // se o campo estiver vazio, impede que seja registrado
            // Campo não preechido 
            setError('Campo obrigatório!'); // Aparece mensagem de erro
            event.preventDefault();
            return false;
        } else if (passwordInput.length == 0) {
            // Campo não preechido 
            setError('')
            setError2('Campo obrigatório!') // Aparece mensagem de erro 
            event.preventDefault();
            return false;
        } else {
            // Mensagem de erro é apagada 
            setError(null);
            setError2(null);
            console.log('CREDENCIAIS DE USUARIO =>', 'USER:', userInput, "SENHA:", passwordInput);
            // console.log('passou')
            axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view&filterByFormula=(AND({Email}=%22' + userInput + '%22,{Senha}=%22' + passwordInput + '%22))', {
                headers: {
                    "Authorization": "Bearer key2CwkHb0CKumjuM"
                }
            }).then((response) => {
                if (response.data.records.length == 0) {
                    alert('Email e/ou Senha inválidos')
                    event.preventDefault();
                    return false;
                } else {
                    console.log(response.data.records.length)
                    setShowModal(true)
                    return true;

                }
            })
                .catch(() => {
                    console.log('deu errado')
                })
        }
    }

    function handleTextChange(event) {
        setUserInput(event.target.value); // guarda o valor preenchido no content Input
    }

    function handleTextChange2(event) {
        setPasswordInput(event.target.value); // guarda o valor preenchido no content Input
    }


    const handler = (event) => {
        if (event.key === 'Enter') {
            submitForm();
        }
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
                <form className="formLogin" onKeyPress={(e) => handler(e)}>
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
                        placeholder="Senha"
                        value={passwordInput} // valor do input 
                        onChange={handleTextChange2} // guarda o valor preenchido
                    />
                    {error2 && <p className="invalidUser">{error2}</p>}
                </form>
                <button className="buttonLogin" type="submit" onClick={submitForm}> Acessar </button>
            </div>

            <div className="backdrop" style={{ display: (modalShow ? 'block' : 'none') }} onSubmit={() => setShowModal(false)}></div>

            <div className="modalContainer" style={{ display: (modalShow ? 'block' : 'none') }}>
                <div className="modalContent"> <h1>Acesso liberado</h1>
                    <Link to="/search"><button className="buttonModal" type="submit">Continuar</button></Link>
                </div>
            </div>
        </div>
    )
}


export default Login;