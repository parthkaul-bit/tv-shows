# TV Show Booking App

This is a simple React application for booking tickets for TV shows. Users can view a list of TV shows, see details of each show, and book tickets for their favorite shows.

## Features

### Home Page
- Displays a list of TV shows fetched from the TVMaze API.
- Each show is represented as a clickable card that redirects to the show details page.

### Show Details Page
- Displays detailed information about a selected TV show.
- Allows users to book movie tickets for the show.
- Checks if the show is already booked and updates the UI accordingly.

### Booking Form
- A form to collect user details for booking a movie ticket.
- User input fields include name, email, and phone number.
- On successful booking, redirects to the show details page and displays a success alert.

## Components

### Home Page
- Displays a list of TV shows fetched from the TVMaze API.
- Each show is represented as a clickable card.

### Show Details Page
- Displays detailed information, including an image, about a selected TV show.
- Allows users to book movie tickets for the show.

### Booking Form
- Opens a form with pre-filled details for booking a movie ticket.
- Collects user details (name, email, phone number).
- Stores booking details in local storage.
- Updates 

## Installation

1. Clone the repository: `git clone https://github.com/parthkaul-bit/tv-shows-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage

1. Open the app in your web browser.
2. Navigate to the home page to see the list of TV shows.
3. Click on a show to view its details.
4. Book a ticket by filling out the booking form.
5. After booking, the details page shows "Booked" instead of "Book Ticket."
6. Confirm the booking on the show details page.

## Technologies Used

- React
- React Router
- Bootstrap


