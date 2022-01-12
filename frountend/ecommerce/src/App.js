// Moduels
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './Redux/Action/action';

// Components
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

// Pages
import HomePage from './Pages/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <NavbarComponent />

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      {/* Routes */}

      {/* Footer */}
    </div>
  );
}

export default App;
