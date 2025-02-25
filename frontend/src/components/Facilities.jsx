import React, { useEffect, useState } from "react";

const Facilities = ({ hotelId, accessToken }) => {
  const [facilities, setFacilities] = useState({
    basic: [
      { _id: "1", name: "Free Wi-Fi" },
      { _id: "2", name: "Air Conditioning" },
      { _id: "3", name: "Parking" },
    ],
    wellness: [
      { _id: "4", name: "Swimming Pool" },
      { _id: "5", name: "Spa" },
      { _id: "6", name: "Sauna" },
    ],
    business: [
      { _id: "7", name: "Conference Room" },
      { _id: "8", name: "Business Center" },
      { _id: "9", name: "Projector" },
    ],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // You can uncomment this to fetch data if needed later
    // const fetchFacilities = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(`/api/hotels/${hotelId}/facilities`, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     // Handle response data here...
    //   } catch (err) {
    //     setError("Failed to load facilities");
    //     console.error("Error fetching facilities:", err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchFacilities();
  }, [hotelId, accessToken]);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Loading facilities...</div>;
  }

  if (error) {
    return <div style={{ color: "red", textAlign: "center", padding: "20px" }}>{error}</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "2em", color: "#333", fontWeight: "600", textAlign: "center" }}>Facilities</h2>

      {/* Render Basic Facilities */}
      <h3 style={{ color: "#4CAF50", textAlign: "center" }}>Basic Amenities</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {facilities.basic.length > 0 ? (
          facilities.basic.map((facility) => (
            <div
              key={facility._id}
              style={{
                backgroundColor: "#E8F5E9",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                width: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <h4 style={{ color: "#388E3C", fontSize: "1.1em", fontWeight: "500" }}>{facility.name}</h4>
            </div>
          ))
        ) : (
          <div>No basic amenities available.</div>
        )}
      </div>

      {/* Render Wellness Facilities */}
      <h3 style={{ color: "#00B8D4", textAlign: "center" }}>Wellness Facilities</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {facilities.wellness.length > 0 ? (
          facilities.wellness.map((facility) => (
            <div
              key={facility._id}
              style={{
                backgroundColor: "#E1F5FE",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                width: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <h4 style={{ color: "#0288D1", fontSize: "1.1em", fontWeight: "500" }}>{facility.name}</h4>
            </div>
          ))
        ) : (
          <div>No wellness amenities available.</div>
        )}
      </div>

      {/* Render Business Facilities */}
      <h3 style={{ color: "#FF7043", textAlign: "center" }}>Business Facilities</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {facilities.business.length > 0 ? (
          facilities.business.map((facility) => (
            <div
              key={facility._id}
              style={{
                backgroundColor: "#FFEBEE",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                width: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <h4 style={{ color: "#D32F2F", fontSize: "1.1em", fontWeight: "500" }}>{facility.name}</h4>
            </div>
          ))
        ) : (
          <div>No business facilities available.</div>
        )}
      </div>
    </div>
  );
};

export default Facilities;
