import React from "react";

const RoomCard = ({ room }) => {
  const buttonStyle = {
    base: {
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "0.9em",
      fontWeight: "bold",
    },
    addToCart: {
      backgroundColor: "#28a745",
    },
    bookNow: {
      backgroundColor: "#007bff",
    },
  };

  // Destructuring the room object
  const { _id, title, desc, price, maxPeople, photos, discount } = room;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {room ? (
        <div
          key={_id} // Using _id as the unique key
          style={{
            width: '100%',
            maxWidth: '300px',
            padding: '10px',
            boxSizing: 'border-box',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={photos[0] || "default-room-image.jpg"} // Displaying first image in photos array
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
          <div style={{ marginTop: '10px', fontSize: '1.1em', color: '#333' }}>
            <p><strong>Room Type:</strong> {title}</p>
            <p><strong>Description:</strong> {desc}</p> {/* Displaying room description */}
            <p><strong>Capacity:</strong> {maxPeople || "N/A"}</p> {/* Max people */}
            <p style={{ fontSize: '1.2em', color: '#d9534f', fontWeight: 'bold' }}>
              <strong>Price:</strong> ${price}
            </p>
            {discount > 0 && (
              <p style={{ fontSize: '1.1em', color: '#ff9900' }}>
                <strong>Discount:</strong> {discount}% Off
              </p>
            )}

            {/* Buttons */}
            
            <button
              style={{ ...buttonStyle.base, ...buttonStyle.bookNow }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              Book Now
            </button>
          </div>
        </div>
      ) : (
        <p>No room available at the moment.</p> // Message when room data is not available
      )}
    </div>
  );
};

export default RoomCard;
