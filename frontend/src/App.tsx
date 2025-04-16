import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AddHotel from './pages/AddHotel';
import Reserve from './pages/BookHotel';

function App() {
  const token = localStorage.getItem('token')

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path = "/reserve" element={<Reserve />} />
        </Routes>
    </Router>
  );
}

export default App;