import React from "react";
import './Sidebar.css';
import logoImg from '../assets/icons/logo.png';
import booksIcon from '../assets/icons/books.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="https://github.com/luanasa/spotiflower" alt="">
                    <img src={logoImg} alt="Logo do Spotify" />
                </a>
            </div>
                <ul>
                    <li>
                        <a href="https://github.com/luanasa/spotiflower">
                            <span className="fa fa-home">
                            <FontAwesomeIcon icon={faHouse} />
                            </span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/luanasa/spotiflower">
                            <span className="fa fa-search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul> 
        </nav>

        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa">
                        <img src={booksIcon} alt="" />
                    </span>
                    <span className="align-w-books">Sua biblioteca</span>
                </button>
                <span className="fa fa-plus">
                <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies">
                <a href="https://github.com/luanasa/spotiflower">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                    <span className="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div> 
    )
};

export default Sidebar;