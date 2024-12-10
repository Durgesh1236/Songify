import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AlbumItem.css';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/album/${id}`)} className="album-item">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="description">{desc}</p>
    </div>
  );
};

export default AlbumItem;
