import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CategoryDetails from './pages/CategoryDetails';
import Navbar from './components/Navbar';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🏠 Home Page */}
        <Route path="/" element={<Home />} />

        {/* 🏙️ Cities Page */}
        <Route path="/cities/:categoryId" element={<Cities />} />

        {/* 📋 Category Details Page */}
        <Route path="/categories/:categoryId/:cityId" element={<CategoryDetails />} />

        {/* 🌟 Fallback Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
