import React from 'react';
import { useHistory } from 'react-router-dom';

import {FaRegUserCircle, FaMinusCircle} from 'react-icons/fa'

import './remove-sty.css';
import './logout-sty.css';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function RemoveAccount() {

     const history = useHistory();

    function DeleteUser() {
        alert("Sim, Remover?")
        history.push('/');
    }    

    return (
        <div className="logout-container">
                <div className="l-form-container">
                    <section className="form">
                        <div className="form-header">
                            <img src={logoImg} alt="Google" />
                                <div className="name-account">
                                    <p>Remover uma Conta</p>
                                    <span>Remover desse navegador</span>
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
                                    <div className="desconect-email">
                                        <button type="button"  onClick={DeleteUser}>
                                            <FaMinusCircle size={16}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="r-bts-option">
                            <ul>
                                <li>
                                <label htmlFor="other-email">
                                    <button className="other-email">
                                        <FaRegUserCircle className="icon-user-plus" size={18}  color=" #777"/>
                                        Usar outra conta
                                    </button>
                                </label>    
                                </li>
                            </ul>
                            <div className="footer">
                                <label htmlFor="concluido-bts">
                                        <button onClick={() => {
                                            history.push('/logout/RemoveAccount');
                                        }} className="concluido-bts"> Concluído</button>
                                </label>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    );
}