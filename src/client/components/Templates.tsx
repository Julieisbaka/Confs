import React from 'react';

const Templates: React.FC = () => {
    const templateList = [
        { id: 1, name: 'Basic HTML Template', description: 'A simple HTML template for quick starts.' },
        { id: 2, name: 'React Starter', description: 'A starter template for React applications.' },
        { id: 3, name: 'Vue.js Template', description: 'A template for building Vue.js applications.' },
        { id: 4, name: 'Flask API Template', description: 'A template for creating Flask APIs.' },
        { id: 5, name: 'Django Starter', description: 'A starter template for Django applications.' },
        // Add more templates as needed
    ];

    return (
        <div className="templates-container">
            <h2>Available Templates</h2>
            <ul>
                {templateList.map(template => (
                    <li key={template.id}>
                        <h3>{template.name}</h3>
                        <p>{template.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Templates;