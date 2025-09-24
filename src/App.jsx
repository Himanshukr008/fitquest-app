import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  // In a real app, you'd check localStorage for a token
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  const handleLogin = (email, password) => {
    // --- MOCK LOGIN ---
    // In a real app, this would be an API call.
    if (email && password) {
      console.log("Logged in with:", email);
      setIsAuthenticated(true);
    }
    // ------------------
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <AuthPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;