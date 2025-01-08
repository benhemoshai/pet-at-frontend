import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Create Context
const SearchContext = createContext();

// Custom Hook for Using Context
export const useSearch = () => useContext(SearchContext);

// Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query, categories, cities, categoryItems) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const queryParts = lowerQuery.split(' '); // Split the query by spaces

    let matchedCategory = null;
    let matchedCity = null;

    // Find if any part matches a category
    for (const part of queryParts) {
      matchedCategory = categories.find((cat) => cat.title.toLowerCase().includes(part));
      if (matchedCategory) break;
    }

    // Find if any part matches a city
    for (const part of queryParts) {
      matchedCity = cities.find((city) => city.name.toLowerCase().includes(part));
      if (matchedCity) break;
    }

    // Filter items based on categoryId and cityId
    let results = categoryItems;

    if (matchedCategory) {
      results = results.filter((item) => item.categoryId === matchedCategory.id);
    }

    if (matchedCity) {
      results = results.filter((item) => item.cityId === matchedCity.id);
    }

    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

// ✅ Prop Validation
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
