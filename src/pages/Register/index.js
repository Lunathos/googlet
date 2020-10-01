import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEyeOff } from 'react-icons/fi';

//import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import shieldImg from '../../assets/account-shield.png';

export default function Register() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            sobrenome,
            gmail,
            password,        
        };

        // console.log(data);        
        history.push("/registerinfo");
        /*
        try {         
            console.log(data);
            const response = await api.post('users', data);
            alert(`Seu e-mail de acesso: ${response.data.gmail}`); 
            history.push("/registerinfo");
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }   
        */
    }

    return (
        <div className="register-container">
            <div className="content">          
                <form onSubmit={handleRegister}>
                    <div className="google-header">
                        <img src={logoImg} alt="Google Logo" />
                        <h1>Criar sua Conta do Google</h1>
                        <h3>Ir para o Gmail</h3>
                    </div>

                    <div className="input-name-group">
                        <input 
                            required
                            placeholder="Nome" 
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />

                        <input
                            required 
                            placeholder="Sobrenome" 
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)}
                        />
                    </div>
                    
                    <div className="input-email-group">
                        
                        <input 
                            required
                            type="email" 
                            placeholder="Nome de Usuário"
                            value={gmail}
                            onChange={e => setGmail(e.target.value)}                            
                            />

                        <p>Você pode usar letras, números e pontos finais</p>
                        
                    </div>

                    <div className="input-password-group">
                        <input
                            required
                            type="password"
                            placeholder="Senha" 
                            style={{ width: 150}}
                            value={password}
                            onChange={e => setPassword(e.target.value)}                            
                        />

                        <input 
                            required
                            type="password" 
                            placeholder="Confirmar" 
                            style={{ width: 150}}
                            value={confirmar}
                            onChange={e => setConfirmar(e.target.value)}                            
                        />
                        
                        <button type="button">
                            <FiEyeOff size={20} />
                        </button>

                        <p>Use oito ou mais caracteres com uma combinação de
                        <br/> letras, números e símbolos</p>
                    </div>

                    <Link to="/">Faça login em vez disso</Link>
                    <button 
                        className="button"
                        type="submit"
                        > Próxima</button>
                </form>

                <section>
                    <img src={shieldImg} alt="account-shield" />
                    <p>Uma única conta. Todo o Google trabalhando para você.</p>
                </section>
            </div>
        </div>
    );
}