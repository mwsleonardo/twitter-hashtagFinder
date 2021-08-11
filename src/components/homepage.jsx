import React from 'react';


function Homepage() {

    


return (
    <div>
            <header className="banner">
                <div className="title">
                    <img src={LogoWhite} alt="Logo" class="logo"></img>
                    <div className="buttons">
                        <button className="aboutButton"> Sobre </button>
                        <button className="loginButton"> Login </button>
                    </div>
                </div>
                <div className="textBox">
                    <h1 className="title"> Encontre hashtags de maneira fácil  </h1>
                    <p className="subtitle"> Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo </p>
                </div>
            </header>
            <footer>
                <p className="footerText"> @Newtab Academy 2021. Todos os direitos reservados. </p>
            </footer>
        </div>
    
    
    )
}


export default Homepage;