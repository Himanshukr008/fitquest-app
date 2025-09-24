import React from 'react';
import { FaRunning, FaHeartbeat, FaFistRaised } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './QuestCard.css';

const QuestCard = ({ quest, onComplete }) => {

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cardio': return <FaRunning />;
      case 'Strength': return <FaFistRaised />;
      case 'Wellness': return <FaHeartbeat />;
      default: return null;
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div className="quest-card" variants={itemVariants}>
      <div className="quest-header">
        <div className="quest-category">
          {getCategoryIcon(quest.category)}
          <span>{quest.category}</span>
        </div>
        <div className="quest-xp">+{quest.xp} XP</div>
      </div>
      <h4 className="quest-title">{quest.title}</h4>
      <p className="quest-description">{quest.description}</p>
      <button 
        className="btn-primary complete-button" 
        onClick={() => onComplete(quest.id, quest.xp)}
      >
        Complete Quest
      </button>
    </motion.div>
  );
};

export default QuestCard;