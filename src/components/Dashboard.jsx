import React from 'react';
import ProfileCard from './ProfileCard';
import QuestList from './QuestList';
import './Dashboard.css';

const Dashboard = ({ user, quests, onQuestComplete }) => {
  return (
    <div className="dashboard-container">
      <ProfileCard user={user} />
      <QuestList quests={quests} onQuestComplete={onQuestComplete} />
    </div>
  );
};

export default Dashboard;