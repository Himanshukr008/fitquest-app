import React from 'react';
import QuestCard from './QuestCard';
import './QuestList.css';
import { motion } from 'framer-motion';

const QuestList = ({ quests, onQuestComplete }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="quest-list-container">
      <h3 className="quest-list-title">Your Active Quests</h3>
      {quests.length > 0 ? (
        <motion.div 
          className="quest-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {quests.map(quest => (
            <QuestCard key={quest.id} quest={quest} onComplete={onQuestComplete} />
          ))}
        </motion.div>
      ) : (
        <p className="no-quests-message">No active quests. Time to rest, hero!</p>
      )}
    </div>
  );
};

export default QuestList;