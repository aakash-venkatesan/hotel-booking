import React, { useState, useEffect } from "react";
import axios from "axios";

const HotelInfo = ({ hotelId }) => {
  const [hotelInfo, setHotelInfo] = useState(null); // State to hold hotel data
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const hotel = '67bd4f4d31433cbdcb94a498'; // Static hotel ID for this example, you can replace it with hotelId prop

  useEffect(() => {
    const fetchHotelInfo = async () => {
      try {
        // Corrected axios call with proper backticks for template string interpolation
        const response = await axios.get(`http://localhost:5000/api/hotels/${hotel}`);
        setHotelInfo(response.data); // Set the fetched hotel info
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    if (hotel) {
      fetchHotelInfo();
    }
  }, [hotel]);

  if (!hotelInfo) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  const buttonStyle = {
    backgroundColor: isHovered ? "#218838" : "#28a745",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1000",
    paddingTop: "100px",
    textAlign: "center",
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "500px",
    margin: "auto",
  };

  const closeButtonStyle = {
    backgroundColor: "#FF5733",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div
      style={{
        borderBottom: "2px solid #ddd",
        paddingBottom: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        padding: "30px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5em", color: "#333", fontWeight: "600" }}>
        {hotelInfo.name || "Hotel Name"} {/* Dynamically display hotel name */}
      </h1>

      <p
        style={{
          fontSize: "1.1em",
          color: "#555",
          lineHeight: "1.6",
          margin: "10px 0",
        }}
      >
        Welcome to <strong>{hotelInfo.name}</strong>, your ultimate destination for relaxation and luxury. Nestled in the heart of the city, we offer a variety of world-class amenities and impeccable service. Whether you're here for business or leisure, our hotel promises to provide an unforgettable experience.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.1em",
          color: "#555",
        }}
      >
        <p>
          <strong>Location:</strong> {hotelInfo.location || "Location not available"}
        </p>
        <p>
          <strong>Rating:</strong> {hotelInfo.rating ? "⭐".repeat(hotelInfo.rating) : "No rating"}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.2em",
          color: "#333",
          marginTop: "10px",
        }}
      >
        <p>
          <strong>Price Range:</strong> {hotelInfo.priceRange || "Price not available"}
        </p>
        <p
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)} // Open the modal when clicked
        >
          Book Now
        </p>
      </div>

      {/* Modal */}
      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <h2 style={{ color: "#333" }}>Don't Miss Out!</h2>
          <p style={{ fontSize: "1.2em", color: "#555" }}>
            Check out the rooms and secure your stay at {hotelInfo.name} now!
          </p>
          <button
            style={closeButtonStyle}
            onClick={() => setIsModalOpen(false)} // Close the modal
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
