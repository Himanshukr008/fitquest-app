import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AuthPage.css';

const AuthPage = ({ onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      onLogin(email, password);
    } else {
      // Mock signup, then log in
      console.log("Signed up with:", username, email);
      onLogin(email, password);
    }
  };

  return (
    <div className="auth-container">
        <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtr73j_-CPbl0yKCRn7dRLl_XVPIhOv4AZFw&s" alt="fitness image" />
        </div>
        
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="auth-title">
          Fit<span className="title-highlight">Quest</span>
        </h1>
        <p className="auth-subtitle">
          {isLoginView ? 'Welcome back, Hero.' : 'Begin your adventure.'}
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginView && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary auth-button">
            {isLoginView ? 'Enter in the FitQuest' : 'Join the FitQuest'}
          </button>
        </form>
        <p className="auth-toggle">
          {isLoginView ? "Don't have an account?" : 'Already a FitQuest?'}
          <button onClick={() => setIsLoginView(!isLoginView)}>
            {isLoginView ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;