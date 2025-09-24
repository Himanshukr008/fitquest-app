import React from 'react';
import { motion } from 'framer-motion';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  const xpPercentage = (user.currentXp / user.xpToNextLevel) * 100;

  return (
    <motion.div 
      className="profile-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-info">
        <h2 className="profile-name">{user.username}</h2>
        <div className="profile-level">Level {user.level}</div>
      </div>
      <div className="xp-bar-container">
        <motion.div
          className="xp-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${xpPercentage}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      <div className="xp-text">{user.currentXp} / {user.xpToNextLevel} XP</div>
    </motion.div>
  );
};

export default ProfileCard;