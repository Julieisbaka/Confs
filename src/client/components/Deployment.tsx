import React, { useState } from 'react';

const Deployment: React.FC = () => {
    const [status, setStatus] = useState<string>('idle');
    const [logs, setLogs] = useState<string[]>([]);

    const handleDeploy = async () => {
        setStatus('deploying');
        setLogs([]);

        try {
            // Simulate deployment process
            const response = await fetch('/api/deployment/start', { method: 'POST' });
            const result = await response.json();

            if (result.success) {
                setLogs((prevLogs) => [...prevLogs, 'Deployment started successfully.']);
                // Monitor deployment status
                monitorDeployment(result.deploymentId);
            } else {
                setLogs((prevLogs) => [...prevLogs, 'Deployment failed to start.']);
                setStatus('error');
            }
        } catch (error) {
            setLogs((prevLogs) => [...prevLogs, 'An error occurred during deployment.']);
            setStatus('error');
        }
    };

    const monitorDeployment = async (deploymentId: string) => {
        const interval = setInterval(async () => {
            const response = await fetch(`/api/deployment/status/${deploymentId}`);
            const result = await response.json();

            setLogs((prevLogs) => [...prevLogs, `Deployment status: ${result.status}`]);

            if (result.status === 'completed' || result.status === 'failed') {
                clearInterval(interval);
                setStatus(result.status);
            }
        }, 5000);
    };

    return (
        <div className="deployment-container">
            <h2>Deployment</h2>
            <button onClick={handleDeploy} disabled={status === 'deploying'}>
                {status === 'deploying' ? 'Deploying...' : 'Deploy'}
            </button>
            <div className="deployment-logs">
                <h3>Logs:</h3>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Deployment;