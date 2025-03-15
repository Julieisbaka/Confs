import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import projectsRouter from './api/projects';
import deploymentRouter from './api/deployment';
import aiRouter from './api/ai';
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/deployment', deploymentRouter);
app.use('/api/ai', aiRouter);

// Error handling
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});