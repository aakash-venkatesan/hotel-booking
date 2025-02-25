import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelInfo from "../components/HotelInfo";
import Facilities from "../components/Facilities";
import FilterOptions from "../components/Filteroptions";
import RoomCard from "../components/Roomcard";

const HotelBookingPage = () => {
  const [filters, setFilters] = useState({});
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const hotelId = '67bd4f4d31433cbdcb94a497';

  // Your access token
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmQ2YjM3M2MxNGE3OTRjMTA0Y2M1ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NDA0NjcwMTQsImV4cCI6MTc0MDU1MzQxNH0.1JqbN6giOeMblR5xOMS9BFym5dURzpIoU8tkE52LNxY"; // Include your access token here

  // Fetch room data from the API with the access token
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/rooms?hotelId=${hotelId}`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,  // Add the access token to the request header
        },
      })
      .then((response) => {
        setRoomData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
        setLoading(false);
      });
  }, [hotelId, accessToken]);

  const handleFilterChange = (filterData) => {
    setFilters({ ...filters, ...filterData });
  };

  const filteredRooms = roomData.filter((room) => {
    return (
      (!filters.capacity || room.capacity === filters.capacity) &&
      (!filters.priceRange || room.price <= filters.priceRange)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#E0F7FA", minHeight: "100vh", padding: "30px", fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <HotelInfo hotelId={hotelId} />
          <Facilities hotelId={hotelId} />
        </div>

        <FilterOptions onFilterChange={handleFilterChange} />

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {filteredRooms.map((room) => (
            <RoomCard key={room.roomId} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelBookingPage;
