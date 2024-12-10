import React, { useContext } from 'react';
import Navbar from './Navbar';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import { PlayerContext } from '../context/PlayerContext';
import './DisplayHome.css';

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="display-section">
        <h1 className="section-title">Featured Charts</h1>
        <div className="scrollable-container">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
              className="album-item"
            />
          ))}
        </div>
      </div>

      <div className="display-section">
        <h1 className="section-title">Today's biggest hits</h1>
        <div className="scrollable-container">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item._id}
              className="song-item"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
