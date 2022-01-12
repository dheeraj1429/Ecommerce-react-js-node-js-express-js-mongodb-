// Moduels
import { Routes, Route } from 'react-router';

// Components
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';

// Pages
import HomePage from './Pages/HomePage/HomePage';

function App() {
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
