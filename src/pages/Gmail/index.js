import React from 'react';

import {
    FaInbox, FaStar, FaClock,
    FaPaperPlane, FaStickyNote, FaExclamationCircle,
    FaTrash, FaSearch
} from 'react-icons/fa';

import SideNav, {
    Toggle, Nav,
    NavItem, NavIcon, NavText
} from '@trendmicro/react-sidenav';

import './react-sidenav.css';


import logoImg from '../../assets/gmail.png';
import './styles.css';


export default function Gmail(){

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
                        placeholder="Pesquisar e-mail">
                    </input>
                </form>
                </div>
                <div className="google-left-navbar">

                    <SideNav
                        onSelect={(selected) => {
                            // Add your code here
                        }}
                    >
                        <SideNav.Toggle/>

                        <SideNav.Nav defaultSelected="inbox">
                        
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
                    <p>Oi</p>
                    <p>Hwat</p>
                </div>
                
                <div className="gmail-body-container">
                <p>Hello World</p>
                </div>
                
            </div>
        </div>
    );
}