import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Netflix Clone</h1>
      <p>Your favorite movies and shows, all in one place.</p>
      <div className="banner">
        <img src="path/to/banner-image.jpg" alt="Banner" />
      </div>
      <div className="content">
        {/* Add movie cards or other content here */}
      </div>
    </div>
  );
};

export default Home;