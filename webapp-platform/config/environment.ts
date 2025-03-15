export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
    loggingEnabled: true,
    storageBucket: 'your-storage-bucket-url',
    aiServiceUrl: 'http://localhost:3000/api/ai',
    defaultTemplate: 'basic-template',
    supportedLanguages: ['javascript', 'typescript', 'python', 'php'],
    features: {
        aiAssistant: true,
        liveDebugging: true,
        autoDeployment: false,
    },
};