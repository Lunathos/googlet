import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import infoShield from '../../assets/num-shield.svg';

export default function RegisterInfo(){
    // const[phone, setPhone] = useState('');
    // const[email2, setEmail2] = useState('');
    // const[day, setDay] = useState('');
    // const[month, setMonth] = useState('');
    // const[year, setYear] = useState('');
    
    const history = useHistory();

    function hanldeGo(){
        history.push('/gmail');
    }

    return (
    <div className="reginfo-container">
        <div className="content">    

                <form onSubmit={hanldeGo}>
                    <div className="google-header">
                        <img src={logoImg} alt="Google Logo" />
                        <h1>Bem-vindo ao Google</h1>
                        
                        <FaRegUserCircle size={20} color="#1A73E8"/>
                        <p>text.example@gmail.com</p>
                    </div>


                    <div className="input-optI-group">
                        <select>
                            <option value={"BR"} disabled hidden></option>
                        </select>

                        <input type="number" placeholder="Número de telefone (opcional)" />
                        
                        <p>Usaremos seu número para segurança da conta. Ele não ficará
                        vísivel para outras pessoas.</p>

                    </div>

                    <div className="input-optII-group">
                        <input type="email" placeholder="Endereço de -email de recuperação (opcional)" />
                        <p>Nós usaremos essa informação para manter sua conta segura</p>
                    </div>

                    <div className="birthday-group">
                        <input type="text" name="dia" placeholder="Dia"/>
                        <select>
                            <option defaultValue={""} disabled hidden >Mês</option>
                            <option value={'1'}>Janeiro</option>
                            <option value={'2'}>Fevereiro</option>
                            <option value={'3'}>Março</option>
                            <option value={'4'}>Abril</option>
                            <option value={'5'}>Maio</option>
                            <option value={'6'}>Junho</option>
                            <option value={'7'}>Julho</option>
                            <option value={'8'}>Agosto</option>
                            <option value={'9'}>Setembro</option>
                            <option value={'10'}>Outubro</option>
                            <option value={'11'}>Novembro</option>
                            <option value={'12'}>Dezembro</option>
                        </select>
                        <input type="text" name="ano" placeholder="Ano" maxLength={4}/>

                        <p>Data de nascimento</p>
                    </div>
                    
                    <div className="select-genero-group">
                        <select>
                            <option value={""} selected disabled hidden>Gênero</option>
                            <option value={"M"}>Masculino</option>
                            <option value={"F"}>Feminino</option>
                            <option value={"ND"}>Prefiro não dizer</option>
                            <option value={"P"}>Personalizar</option>
                        </select>
                    </div>

                    <h4><Link to="/registerinfo">Por que pedimos essas informações</Link></h4>

                    <Link to="/register">Voltar</Link>
                    <button className="button" type="submit">Próxima</button>
                </form>

                <section>
                    <img src={infoShield} alt="Shield" />
                    <p>Suas informações pessoais são particulares e seguras</p>
                </section>
        </div>
    </div>
    );
}