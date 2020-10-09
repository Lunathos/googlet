import React from 'react';
import { useHistory} from 'react-router-dom';

import {FaRegUserCircle, FaCaretDown} from 'react-icons/fa'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Logout() {

    const history = useHistory();

    function goToRemove() {
        history.push("/logout/RemoveAccount");
    }


    return (
        <div className="logout-container">
                <div className="l-form-container">
                    <section className="form">
                        <div className="form-header">
                            <img src={logoImg} alt="Google" />
                        </div>

                        <div className="form-image"> 
                                <div className="name-account">
                                    <p>TET ALUNO</p>
                                </div>

                            <button className="user-account-bts" onClick={goToRemove}>
                                <div className="user-account">
                                    <FaRegUserCircle size={26} />
                                    <div className="user-account-email">
                                        <p>text.example@gmail.com</p>
                                        <FaCaretDown className="user-acc-caret" size={15} />
                                    </div>
                                </div>
                            </button>
                        </div>

                        <form>
                            <input placeholder="Senha" type="password" required/>
                            <div className="l-form-footer">
                                <h4><a href="/">Esqueceu sua senha?</a></h4>
                                <button className="button" type="submit">Próxima</button>
                            </div>
                        </form>
                    </section>
                </div>
        </div>
    );
}