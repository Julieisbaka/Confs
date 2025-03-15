import React from 'react';

const Console: React.FC = () => {
    const [logs, setLogs] = React.useState<string[]>([]);

    const addLog = (message: string) => {
        setLogs(prevLogs => [...prevLogs, message]);
    };

    // Example of adding logs (this could be replaced with actual logging logic)
    React.useEffect(() => {
        addLog('Console initialized');
        addLog('Listening for events...');
    }, []);

    return (
        <div className="console">
            <h2>Console</h2>
            <div className="log-output">
                {logs.map((log, index) => (
                    <div key={index}>{log}</div>
                ))}
            </div>
        </div>
    );
};

export default Console;