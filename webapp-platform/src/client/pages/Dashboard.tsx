import React from 'react';
import Editor from '../components/Editor';
import Console from '../components/Console';
import Deployment from '../components/Deployment';
import AIAssistant from '../components/AIAssistant';
import Templates from '../components/Templates';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Templates />
            <Editor />
            <Console />
            <Deployment />
            <AIAssistant />
        </div>
    );
};

export default Dashboard;