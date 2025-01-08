import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CategoryDetails from './pages/CategoryDetails';
import CategoryItemPage from './pages/CategoryItemPage';
import SearchResults from './pages/SearchResults';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cities/:categoryId" element={<Cities />} />
          <Route path="categories/:categoryId/:cityId" element={<CategoryDetails />} />
          <Route path="categories/:categoryId/:cityId/:itemId" element={<CategoryItemPage />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
