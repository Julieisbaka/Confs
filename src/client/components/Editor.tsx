import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/python/python';

const Editor: React.FC = () => {
    const [code, setCode] = useState('// Write your code here...');

    const handleCodeChange = (editor: any, data: any, value: string) => {
        setCode(value);
    };

    return (
        <div className="editor-container">
            <CodeMirror
                value={code}
                options={{
                    lineNumbers: true,
                    mode: 'javascript',
                    theme: 'default',
                }}
                onBeforeChange={handleCodeChange}
            />
        </div>
    );
};

export default Editor;