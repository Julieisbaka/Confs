export type Project = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
};

export type User = {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};

export type Deployment = {
    id: string;
    projectId: string;
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
    createdAt: Date;
    updatedAt: Date;
};

export type LogEntry = {
    timestamp: Date;
    level: 'info' | 'warn' | 'error';
    message: string;
};

export type Template = {
    id: string;
    name: string;
    description: string;
    previewUrl: string;
};