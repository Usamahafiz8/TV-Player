import React, { useState } from "react";
import "./App.css";

function App() {
  // List of video URLs
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4", // Add more URLs as needed
  ];

  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to handle Next button click
  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to handle Previous button click
  const handlePrevious = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div
      style={{
      }}
    >
      <div className="App">
        <div className="image-stack">
          <div className="background-image">
            <video src={videos[currentVideoIndex]} autoPlay muted loop />
          </div>
          <div className="overlay-image"  >
            <img src="tv_screen.png" alt="TV Screen Overlay" className="tv"/>
          </div>
        </div>
      </div>
      <div className="buttons-section"
      >
        <button
          className="nav-button"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
