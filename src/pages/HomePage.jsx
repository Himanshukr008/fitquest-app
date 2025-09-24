import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Diet from '../components/diet';
import Motivation from '../components/motivation';
import Challenges from '../components/challenges';
import BMI from '../components/bmi';
import Chatbot from '../components/chatbot';

const HomePage = ({ onLogout }) => {
  // --- MOCK USER DATA ---
  const [user, setUser] = useState({
    username: 'Himanshu',
    level: 1,
    currentXp: 20,
    xpToNextLevel: 100,
  });

  const [quests, setQuests] = useState([
    { id: 1, title: 'The Morning Mile', description: 'Run or walk 1 mile', xp: 50, category: 'Cardio' },
    { id: 2, title: 'Hydration Ritual', description: 'Drink 8 glasses of water', xp: 30, category: 'Wellness' },
    { id: 3, title: 'Push-up Power', description: 'Complete 20 push-ups', xp: 40, category: 'Strength' }
  ]);
  // ----------------------

  const handleQuestComplete = (questId, xpReward) => {
    let updatedXp = user.currentXp + xpReward;
    let updatedLevel = user.level;
    let updatedXpToNextLevel = user.xpToNextLevel;

    // Check for level up
    if (updatedXp >= updatedXpToNextLevel) {
      updatedLevel += 1;
      updatedXp = updatedXp - updatedXpToNextLevel; // Carry over remaining XP
      updatedXpToNextLevel = Math.floor(updatedXpToNextLevel * 1.5); // Increase XP for next level
      alert(`LEVEL UP! You are now Level ${updatedLevel}!`);
    }

    setUser({
      ...user,
      level: updatedLevel,
      currentXp: updatedXp,
      xpToNextLevel: updatedXpToNextLevel,
    });

    // Remove completed quest
    setQuests(quests.filter(q => q.id !== questId));
  };


  return (
    <div className="homepage-container">
      <Navbar username={user.username} onLogout={onLogout} />
      <main>
        <Dashboard 
          user={user} 
          quests={quests} 
          onQuestComplete={handleQuestComplete}
        />
      </main>
      <div>
        <Motivation/>
        <BMI/>
        <Diet/>
        <Challenges/>
      </div>
      <Chatbot username={user.username} />

    </div>
  );
}

export default HomePage;