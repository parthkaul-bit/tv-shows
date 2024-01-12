import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">TV Shows</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
        {shows.map((show) => (
          <div key={show.show.id} className="col mb-4">
            <div className="card">
              {/* Check if show.show.image exists before accessing show.show.image.medium */}
              <img
                src={show.show.image ? show.show.image.medium : 'https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder11.png'} // Replace 'default-image-url' with your default image URL
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="card-text">Type: {show.show.type}</p>
                <Link to={`/show/${show.show.id}`} className="btn btn-secondary">
                  Show Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
