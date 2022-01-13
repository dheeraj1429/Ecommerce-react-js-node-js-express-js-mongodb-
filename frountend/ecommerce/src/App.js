// Moduels
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './Redux/Action/action';

import DashBoardEditComponent from './DashBoardComponents/DashBoardEditComponent/DashBoardEditComponent';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/dashboard" element={<Dashboard />}>
          <Route path="upload_products" element={<DashBoardEditComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
