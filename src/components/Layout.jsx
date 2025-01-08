import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the path changes

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always displayed */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
