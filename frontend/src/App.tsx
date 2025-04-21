import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AddHotel from './pages/AddHotel';
import Reserve from './pages/ReserveHotel';
import AdminPanel from './pages/AdminPanel';
import HotelDetails from "./pages/HotelDetails";
import ReservationDetails from "./pages/ReservationDetails";
import UserDetails from "./pages/UserDetails";



function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/reservation-details" element={<ReservationDetails />} />
        <Route path="/user-details" element={<UserDetails />} />
     </Routes>
    </Router>
  );
}

export default App;
