import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CategoryDetails from './pages/CategoryDetails';
import CategoryItemPage from './pages/CategoryItemPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 🏠 Home */}
          <Route index element={<Home />} />

          {/* 🏙️ Cities */}
          <Route path="cities/:categoryId" element={<Cities />} />

          {/* 📋 Category Details */}
          <Route path="categories/:categoryId/:cityId" element={<CategoryDetails />} />

          {/* 📝 Category Item Details */}
          <Route path="categories/:categoryId/:cityId/:itemId" element={<CategoryItemPage />} />

          {/* 🌟 Fallback */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
