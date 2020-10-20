import React from 'react';
import { Link, useHistory} from 'react-router-dom';

import {FaRegUserCircle} from 'react-icons/fa'
import {FiSquare} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function ServiceLogin() {

    const history = useHistory();

    function goToGmail(e) {
        e.preventDefault();
        history.push('/gmail');
    }

    return (
        <div className="service-container">
                <div className="form-header">
                    <img src={logoImg} alt="Google" />
                    <h1>Apenas uma conta. Tudo o que o Google oferece.</h1>
                    <h3>Fazer login para prosseguir para o Gmail</h3>
                </div>
            <div className="s-form-container">

                
                <section className="form">
                    <div className="form-image">
                        <div className="user-image">
                            <FaRegUserCircle size={90} />
                        </div>

                        <div className="user-info">
                            <strong>TeT Aluno</strong>
                            <p>tetaluno@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={goToGmail}>

                        <input placeholder="Senha" type="password" required/>
                        <button className="button" type="submit">Fazer Login</button>
                        
                        <div className="form-footer">
                            <button type="button">
                                <FiSquare size={17.5}/>
                            </button>
                            <p>Continuar conectado</p>
                            <h4><a href="/">Esqueceu sua senha?</a></h4>
                        </div>
                    
                    </form>
                    
                </section>
                <div className="s-form-footer">
                <Link to="/">Fazer login com outra conta</Link>
                </div>
            </div>
        </div>
    );
}