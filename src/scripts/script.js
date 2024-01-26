import React, { useState, useEffect } from "react";
import { requestApi } from './Script/script'; // Importe a função requestApi do seu script

function scriptArtists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultArtist, setResultArtist] = useState(null);
  const [resultPlaylist, setResultPlaylist] = useState(null);

  useEffect(() => {
    const searchInput = document.getElementById('search-input');
    const resultArtistElement = document.getElementById('result-artist');
    const resultPlaylistElement = document.getElementById('result-playlists');

    // Atualiza os estados
    setResultArtist(resultArtistElement);
    setResultPlaylist(resultPlaylistElement);
  }, []); // Executa apenas uma vez após a montagem do componente

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      return;
    }
    
    requestApi(searchTerm.toLowerCase(), resultArtist, resultPlaylist);
  }, [searchTerm, resultArtist, resultPlaylist]); // Executa sempre que searchTerm, resultArtist ou resultPlaylist mudam

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='container-principal'>
      <Sidebar/>
      <Header/> 
      <Footer/>
      <input id="search-input" type="text" onChange={handleInputChange} />
    </div>
  );
}

export default scriptArtists;