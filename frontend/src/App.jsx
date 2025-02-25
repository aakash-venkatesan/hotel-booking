// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HotelBookingPage from "./pages/HotelbookingPage";  // Ensure this path is correct

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/hotel/:hotelId" element={<HotelBookingPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HotelBookingPage from "./pages/HotelbookingPage";
//   // Import the Checkout module

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/hotel/:hotelId" element={<HotelBookingPage />} />
//         {/* <Route path="/checkout/:roomId" element={<Checkout />} />  Checkout route */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelBookingPage from "./pages/HotelbookingPage";
// import CheckoutPage from "./pages/CheckoutPage"; // Import CheckoutPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hotel/:hotelId" element={<HotelBookingPage />} />
        {/* Modified checkout route to include both userId and roomId */}
        {/* <Route path="/checkout/:userId/:roomId" element={<CheckoutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
