import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  
    // Check if the show is booked
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    
    // Check if bookingData is an array before using some
    const isBookedShow = Array.isArray(bookingData) && bookingData.some((booking) => booking.showId === id);
  
    setIsBooked(isBookedShow);
  }, [id]);

  if (!show) {
    return <div className="container mt-4 mx-auto text-center">Loading...</div>;
  }

  const imageUrl = show.image ? show.image.medium : 'https://www.aputf.org/wp-content/uploads/2015/06/default-placeholder11.png';

  return (
    <div className="container mt-4 mx-auto">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={imageUrl}
              className="card-img img-fluid mx-auto"
              alt={show.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h2 className="card-title">{show.name}</h2>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }} />
              <div>
                {isBooked ? (
                  <button className="btn btn-success mx-2" disabled>
                    Booked
                  </button>
                ) : (
                  <Link to={`/booking/${id}`} className="btn btn-primary mx-2">
                    Book Movie Ticket
                  </Link>
                )}
                <Link to="/" className="btn btn-secondary mx-2">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
