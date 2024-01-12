import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleBooking = () => {
    let bookingData = JSON.parse(localStorage.getItem('bookingData'));

    if (!Array.isArray(bookingData)) {
      bookingData = [];
    }

    const newBooking = {
      showId: id,
      userName: userData.name,
      userEmail: userData.email,
      userPhoneNumber: userData.phoneNumber,
    };

    const updatedBookingData = [...bookingData, newBooking];

    localStorage.setItem('bookingData', JSON.stringify(updatedBookingData));

    setUserData({ name: '', email: '', phoneNumber: '' });
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate(`/show/${id}`);
    }, 3000); // Show alert for 3 seconds and then navigate
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Booking Form</h2>

      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Booking successful! Redirecting to show details...
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="form-control"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleBooking}>
          Book Ticket
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
