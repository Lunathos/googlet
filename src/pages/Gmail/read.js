import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import {
    FaInbox, FaStar, FaClock,
    FaPaperPlane, FaStickyNote, FaExclamationCircle,
    FaTrash, FaSearch, FaQuestionCircle, FaCog, FaTh,
    FaCaretDown, FaEllipsisV, FaSmile , FaGoogleDrive, FaImage, FaLock,
    FaPenAlt, FaRegUserCircle, FaPaperclip, FaFolderPlus, FaArrowLeft,
    FaEnvelopeOpenText, FaStopwatch, FaFolder, FaLocationArrow, FaPrint,
    FaExpandArrowsAlt, FaReply, FaArrowRight
} from 'react-icons/fa';

import SideNav, {
    NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';

import './react-sidenav.css';
import './react-contextmenu.css'

import './read.css';
import anexoImg from '../../assets/docs-anexo.png';
import logoImg from '../../assets/gmail.png';
import plusImg from '../../assets/plus-gmail.png';
import './styles.css';

export default function Gmail(){

    const [disp, setDisp] = useState(false);
    const [anex, setAnex] = useState(false);
    const [opt, setOpt] = useState(false);

    const history = useHistory();

    function goBack() {
        history.push("/gmail");
    }

    function onChange() {
        setAnex(!anex);
    }

    function handleSumbit(event) {
        alert('E-mail enviado');
        setDisp(!disp);
        setAnex(!anex);
        event.preventDefault();
    }


    function handleShowOptions() {
        setOpt(!opt);
    }

    function handlerLogout() {
        history.push("/logout");
    }

    function addAccount() {
        history.push("/logout/RemoveAccount");
    }

    return(
        <div className="gmail-container">
            <div className="gmail-header">
                <img src={logoImg} alt="Gmail Logo" />
                <h1>Gmail</h1>

                <div className="google-search">
                    <div className="search-icon">
                            <FaSearch size={16} color='#dcdce6'/>    
                    </div>
                    <form>
                        <input
                            placeholder="Pesquisar e-mail"
                            type="text"
                            >
                        </input>
                    </form>
                </div>

                <div className="g-s-icon"/>

                <div className="icon-group">
                    <button className="q-bts-icon">
                        <FaQuestionCircle size={16}/>
                    </button>

                    <button className="c-bts-icon">
                        <FaCog size={16}/>
                    </button>

                    <button className="t-bts-icon">
                        <FaTh size={16}/>
                    </button>

                    <button 
                    
                    onClick={handleShowOptions}
                    className="u-bts-icon">
                        <FaRegUserCircle size={35}/>
                    </button>
                </div>

                {opt && 

                <div className="user-options">
                    <div className="user-image-account">
                        <div className="user-image-account-a">
                            <FaRegUserCircle size={80}/>
                        </div>

                        <div className="user-account-b">
                            <div className="user-name-options">TeT Aluno</div>
                            <div className="user-email-options">tetaluno@gmail.com</div>
                            <div className="user-email-options">
                                <label>
                                    <button>Gerenciar sua Conta do Google</button>
                                </label>
                            </div>                            
                        </div>

                        <label htmlFor="user-add-email">
                            <button onClick={addAccount} className="user-add-email">
                                <div className="user-account-c">
                                    <FaRegUserCircle className="user-icon-email" size={20}/>
                                        Adicionar outra conta   
                                </div>
                            </button>
                        </label> 

                        <div className="user-footer-options">
                            <label htmlFor="user-exit">
                                <button onClick={handlerLogout} className="user-exit">
                                    Sair
                                </button>
                            </label>
                        </div>  
                    </div>
                </div>
                }
                

                <div className="google-left-navbar">
                    <SideNav
                        onSelect={(selected) => {
                            // Add your code here
                        }}
                    >
                        <SideNav.Toggle/>

                        <SideNav.Nav defaultSelected="inbox">

                            <NavItem eventKey="write">
                                <NavIcon>
                                    <button 
                                        type="button"
                                        className="bts-write-mail"
                                        onClick={() => {
                                            setDisp(!disp);
                                        }}
                                    >

                                        <img src={plusImg} alt="Escrever"/>
                                    </button>
                                </NavIcon>
                                    <NavText> 
                                    <button 
                                        type="button"
                                        className="bts-write"
                                        onClick={() => {
                                            setDisp(!disp);
                                        }}
                                    >Escrever</button>
                                    </NavText>
                            </NavItem>


                            <NavItem eventKey="inbox">
                                <NavIcon>
                                    <FaInbox size={17.5}/>
                                    <i className="fas fa-inbox" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Caixa de entrada</NavText>
                            </NavItem>
                            <NavItem eventKey="star">
                                <NavIcon>
                                    <FaStar size={17.5}/>
                                    <i className="fas fa-star" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Com estrelas</NavText>
                            </NavItem>
                            <NavItem eventKey="later">
                                <NavIcon>
                                    <FaClock size={17.5}/>
                                    <i className="fas fa-clock" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Adiados</NavText>
                            </NavItem>
                            <NavItem eventKey="send">
                                <NavIcon>
                                    <FaPaperPlane size={17.5}/>
                                    <i className="fas fa-paper-plane" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Enviados</NavText>
                            </NavItem>
                            <NavItem eventKey="draft">
                                <NavIcon>
                                    <FaStickyNote size={17.5}/>
                                    <i className="fas fa-sticky-note" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Rascunho</NavText>
                            </NavItem>

                            <NavItem eventKey="spam">
                                <NavIcon>
                                    <FaExclamationCircle size={17.5}/>
                                    <i className="fas fa-exclamation-circle" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Spam</NavText>
                            </NavItem>

                            <NavItem eventKey="trash">
                                <NavIcon>
                                    <FaTrash size={17.5}/>
                                    <i className="fas fa-trash" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>Lixeira</NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                </div>
            </div>

            <div className="gmail-body">
                <div className="gmail-body-header">
                    <button className="bts-back" onClick={goBack}>
                         <FaArrowLeft size={15}/>                       
                    </button>
                    <button className="bts-archive">
                        <FaFolderPlus size={17.5}/>
                    </button>                    
                    <button className="bts-spam">
                            <FaExclamationCircle size={17.5}/>
                    </button>
                    <button className="bts-trash">
                            <FaTrash size={17.5}/>
                    </button>

                    <button className="bts-noread">
                            <FaEnvelopeOpenText size={17.5}/>
                    </button>
                    <button className="bts-suspend">
                            <FaClock size={17.5}/>
                    </button>
                    <button className="bts-addTask">
                            <FaStopwatch size={17.5}/>
                    </button>
                    <button className="bts-moveTo">
                            <FaFolder size={17.5}/>
                    </button>
                    <button className="bts-marc">
                            <FaLocationArrow size={17.5}/>
                    </button>

                    <button className="bts-grid">
                        <FaEllipsisV size={17.5}/>
                    </button>
                    <div className="gmail-b-header"/>
                </div>
                
                <div className="gmail-body-container">
                    <div className="gmail-message-header">
                        <div className="title-mail">
                            <h3>Modelo Currículo</h3>
                        </div>
                    </div>
                    <div className="gmail-icons-header">
                        <button className="bts-print">
                            <FaPrint size={17}/>
                        </button>
                        <button className="bts-expand">
                            <FaExpandArrowsAlt size={17}/>
                        </button>
                    </div>                   
                    <div className="gmail-description">
                        <div className="gmail-img">
                            <FaRegUserCircle size={30}/>
                        </div>
                        <div className="gmail-user-description">
                            TeT Cursos Profissionalizantes <label>(tetaluno@gmail.com)</label>
                        <div className="bts-user">
                            <button className="bts-star">
                                        <FaStar size={16}/>
                            </button>
                            <button className="bts-reply">
                                        <FaReply size={16}/>
                            </button>
                            <button className="bts-grid-mail">
                                        <FaEllipsisV size={16}/>
                            </button>
                        </div>
                        </div>
    
                        <div className="gmail-user-to">
                            para mim <FaCaretDown size={12}/>
                        </div>
                    </div>  
                
                    <div className="gmail-body-message">
                        Esse é um exemplo de e-mail!
                        Abaixo temos os arquivos anexos.
                    </div>
                    <div className="gmail-anexos">
                        <div className="qtd-anexos">1 anexo</div>

                        <button className="anexos-config">
                        <img src={anexoImg} alt="Anexo"/>
                        
                        <span>Modelo Currículo.docs</span>
                        </button>
                    </div>

                    <div className="gmail-options">
                        <>
                        <button className="button"
                                type="button">
                            <FaReply size={16}/> Responder
                        </button>
                        </>
                        <>
                        <button className="button"
                        type="button">
                            <FaArrowRight size={16}/> Encaminhar
                        </button>
                        </>
                    </div>
                </div>
                    
                        {disp &&
                        <div className="escrever-mail-box" style={{ display: disp}}>
                            <div className="escrever-header">
                                <h2>Nova mensagem</h2>
                            </div>
                            <form onSubmit={handleSumbit}>
                                <input placeholder="Para" type="text"/>
                                <input placeholder="Assunto" type="text"/> 
                                <textarea></textarea>   
                                                                
                                {anex &&    <>
                                <div style={{display: anex}}>
                                    
                                    <div className="fileUpload">
                                        <input type="file"  />
                                    </div>
                                    </div>
                                    </>    
                                }
                                
                                
                            

                            <div className="escrever-footer">
                                <div className="send-group">
                                    <button 
                                        className="button"
                                        type="submit"
                                    > Enviar
                                    </button>
                                    <div className="bts-caret">
                                        <FaCaretDown size={17.5}/>
                                    </div>
                                </div>
                            
                                <div className="bts-group-footer">

                                    <button
                                        type="button"
                                        onClick={onChange}
                                        className="bts-link">
                                        <FaPaperclip className="bts-link" size={17.5} />
                                    </button>

                                    <button 
                                    type="button"
                                    className="bts-smile"
                                    >
                                        <FaSmile size={17.5} />
                                    </button>

                                    <button type="button" className="bts-drive">
                                        <FaGoogleDrive size={17.5} />
                                    </button>

                                    <button type="button" className="bts-image">
                                        <FaImage size={17.5} />
                                    </button>
                                            
                                    <button type="button" className="bts-lock">
                                        <FaLock size={17.5} />
                                    </button>

                                    <button type="button" className="bts-pen">
                                        <FaPenAlt size={17.5} />
                                    </button>
                                            
                                    <button type="button" className="bts-eli">
                                        <FaEllipsisV size={17.5} />
                                    </button>
                                            
                                    <button type="button" className="bts-trash">
                                        <FaTrash size={17.5} />
                                    </button>                     
                                </div>
                            </div>
                            </form></div>}         
 
            </div>


            <div className="gmail-footer">
            </div>         

        </div>
    );
}