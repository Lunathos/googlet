import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Login() {

    const history = useHistory();

    function handlerSubmit(e) {
        e.preventDefault();
    
        history.push("/ServiceLogin");
    }


    return (
        <div className="login-container">
            <div className="form-container">
                <section className="form">
                <img src={logoImg} alt="Google" />
                    <form onSubmit={handlerSubmit}>
                        <h1>Fazer Login</h1>
                        <h3>Ir para o Gmail</h3>

                        <input placeholder="E-mail ou telefone"/>
                        <h4><a href="/">Esqueceu seu e-mail?</a></h4>

                        <p>Não está no seu computador? Use o modo visitante para
                        <br/> fazer login com privacidade. <a href="/">Saiba mais</a></p>                    
                        
                        <Link to="/register">Criar Conta</Link>
                        <button className="button" type="submit">Próxima</button>

                    </form>
                </section>
            </div>
        </div>
    );
}