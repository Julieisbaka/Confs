import React from 'react';

const AIAssistant: React.FC = () => {
    const [query, setQuery] = React.useState('');
    const [response, setResponse] = React.useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Call the AI API to get a response based on the query
        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div className="ai-assistant">
            <h2>AI Assistant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Ask me anything..."
                />
                <button type="submit">Ask</button>
            </form>
            {response && (
                <div className="ai-response">
                    <h3>Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default AIAssistant;