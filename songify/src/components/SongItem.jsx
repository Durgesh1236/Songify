import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import './SongItem.css';

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="song-item"
    >
      <img
        className="song-item-image"
        src={image}
        alt={name}
      />
      <p className="song-item-name">{name}</p>
      <p className="song-item-desc">{desc}</p>
    </div>
  );
};

export default SongItem;
