import React, {useState} from 'react';

import {
    FaInbox, FaStar, FaClock,
    FaPaperPlane, FaStickyNote, FaExclamationCircle,
    FaTrash, FaSearch, FaQuestionCircle, FaCog, FaTh,
    FaRedo, FaCaretDown, FaEllipsisV, FaLink,
    FaSmile , FaGoogleDrive, FaImage, FaLock,
    FaPenAlt, FaRegUserCircle
} from 'react-icons/fa';

import { FiSquare } from 'react-icons/fi';

import SideNav, {
    NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';

import './react-sidenav.css';


import logoImg from '../../assets/gmail.png';
import plusImg from '../../assets/plus-gmail.png';
import './styles.css';


// function Hide() {
//     return (
//         <div>
//             <Gmail />
//         </div>
//     )
// }
//                                    <button 
// type="button"
// className="bts-clip"
// onClick={() => {
//     setAnex(!anex);
// }}
// >

// <FaPaperclip size={17.5}/>
// </button>

export default function Gmail(){

    const [disp, setDisp] = useState(false);
    const [anex, setAnex] = useState(false);

    function onChange() {
        setAnex(!anex);
    }

    function handleSumbit(event) {
        alert('E-mail enviado');
        setDisp(!disp);
        setAnex(!anex);
        event.preventDefault();
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

                    <button className="u-bts-icon">
                        <FaRegUserCircle size={35}/>
                    </button>
                </div>

                

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
                                    <NavText>Escrever</NavText>
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
                    <button className="bts-select">
                        <FiSquare size={17.5}/>
                        <FaCaretDown size={17.5}/>
                    </button>
                    
                    
                    <button className="bts-redo">
                            <FaRedo size={17.5}/>
                    </button>

                    <button className="bts-grid">
                        <FaEllipsisV size={17.5}/>
                    </button>
                    <div className="gmail-b-header"/>

                </div>
                
                <div className="gmail-body-container">
                    <div className="gmail-content">

                                <div className="email-content">
                                    <button className="bts-select-mail">
                                        <FiSquare size={17.5}/>
                                    </button>
                                    <button className="bts-star-mail" onClick={() => {}} type="button">
                                        <FaStar size={17.5}/>
                                    </button>
                                
                                
                                    <button className="bts-mail">
                                        <strong className="title-mail">Modelo de Currículo</strong>
                                
                                        <strong className="desc-mail">Gmail simulador</strong>

                                        <strong className="date-mail">23 set</strong>
                                    </button>
                                </div>

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
                                        <FaLink className="bts-link" size={17.5} />
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