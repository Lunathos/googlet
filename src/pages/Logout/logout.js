import React from 'react';
import { useHistory} from 'react-router-dom';

import {FaRegUserCircle, FaUserMinus} from 'react-icons/fa'

import './logout-sty.css';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function RemoveAccount() {

    const history = useHistory();

    function RemoveUser() {
        history.push("/logout/SignOut/choose");
    }    

    return (
        <div className="logout-container">
                <div className="l-form-container">
                    <section className="form">
                        <div className="form-header">
                            <img src={logoImg} alt="Google" />
                                <div className="name-account">
                                    <p>Escolha uma conta</p>
                                </div>
                        </div>

                        <div className="l-form-image"> 
                            <div className="l-user-account-bts">
                                <div className="l-user-account">
                                    <div className="user-image">
                                        <FaRegUserCircle size={26} />
                                    </div>

                                    <div className="l-user-account-email">
                                        <h3>TeT Aluno</h3>                                        
                                        <div className="l-name-account-email">
                                            <p>tetaluno@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="status-email">
                                        <p>Desconectado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bts-option">
                            <ul>
                                <li>
                                <label htmlFor="other-email">
                                    <button className="other-email">
                                        <FaRegUserCircle className="icon-user-plus" size={
                                            20
                                        }  color=" #777"/>
                                        Usar outra conta
                                    </button>
                                </label>    
                                </li>
                                <li>
                                    <label htmlFor="remove-email">
                                        <button onClick={RemoveUser} type="button" className="remove-email">
                                            <FaUserMinus className="icon-user-minus" size={20} color=" #777"/>
                                            Remover uma conta
                                        </button>
                                    </label>
                                    
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
        </div>
    );
}