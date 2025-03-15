import React from 'react';

const Editor: React.FC = () => {
    return (
        <div className="editor-container">
            <h1>Code Editor</h1>
            <textarea className="code-editor" placeholder="Write your code here..."></textarea>
            <button className="save-button">Save</button>
        </div>
    );
};

export default Editor;