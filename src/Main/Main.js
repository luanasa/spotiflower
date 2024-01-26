import React from "react";
import './Main.css';
import card1 from '../assets/playlist/1.png';
import card2 from '../assets/playlist/2.png';
import card3 from '../assets/playlist/3.png';
import card4 from '../assets/playlist/4.png';
import card5 from '../assets/playlist/5.png';
import card6 from '../assets/playlist/6.png';
import card7 from '../assets/playlist/7.png';
import card8 from '../assets/playlist/1.png';
import card9 from '../assets/playlist/2.png';
import card10 from '../assets/playlist/3.png';
import card11 from '../assets/playlist/4.png';
import card12 from '../assets/playlist/5.png';
import card13 from '../assets/playlist/6.png';
import card14 from '../assets/playlist/7.png';
import card15 from '../assets/playlist/3.png';

const Main = () => {
    return (
        <div className="playlist-container">
                <div id="result-playlists">

                    <div className="offer__scroll-container">
                            <div className="playlist">
                                <h1 id="greeting">Playlists do Spotiflower</h1>
                                <a href="https://github.com/luanasa/spotiflower">Mostrar tudo</a>
                            </div>

                        <div className="offer__list">
                            <section className="offer__list-item">
                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card1">
                                        <img src={card1} alt="" />
                                        <span>Devs cansados</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card2">
                                        <img src={card2} alt="" />
                                        <span>Css não quebrou a página</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card3">
                                        <img src={card3} alt="" />
                                        <span>No errors</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card4">
                                        <img src={card4} alt="" />
                                        <span>Bora codar</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card5">
                                        <img src={card5} alt="" />
                                        <span>Como é amigo?</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card6">
                                        <img src={card6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card7">
                                        <img src={card7} alt="" />
                                        <span>Como é amigo?</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card8">
                                        <img src={card8} alt="" />
                                        <span>No weekends</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card9">
                                        <img src={card9} alt="" />
                                        <span>Rodou!!!</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card10">
                                        <img src={card10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card11">
                                        <img src={card11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card12">
                                        <img src={card12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card13">
                                        <img src={card13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card14">
                                        <img src={card14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                                <a href="https://github.com/luanasa/spotiflower" className="cards">
                                    <div className="cards card15">
                                        <img src={card15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href="https://github.com/luanasa/spotiflower"></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Main;