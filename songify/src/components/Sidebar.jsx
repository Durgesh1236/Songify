import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      {/* Top Section */}
      <div className="sidebar-top">
        <div
          onClick={() => navigate('/')}
          className="sidebar-item"
        >
          <img src={assets.home_icon} alt="Home" />
          <p>Home</p>
        </div>

        <div className="sidebar-item">
          <img src={assets.search_icon} alt="Search" />
          <p>Search</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        {/* Library */}
        <div className="sidebar-library">
          <div className="sidebar-library-left">
            <img src={assets.stack_icon} alt="Library" />
            <p>Your Library</p>
          </div>
          <div className="sidebar-library-right">
            <img src={assets.arrow_icon} alt="Expand" />
            <img src={assets.plus_icon} alt="Add" />
          </div>
        </div>

        {/* Create Playlist */}
        <div className="sidebar-section">
          <h1>Create your first playlist</h1>
          <p>It's easy; we will help you.</p>
          <button>Create Playlist</button>
        </div>

        {/* Podcasts */}
        <div className="sidebar-section">
          <h1>Let's find some podcasts to follow</h1>
          <p>We'll keep you updated on new episodes.</p>
          <button>Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
