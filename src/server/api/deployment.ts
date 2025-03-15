import { Request, Response } from 'express';
import { deployProject, monitorDeployment } from '../services/deploy';
import { logDeploymentEvent } from '../utils/logger';

export const startDeployment = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.body;
        const deploymentId = await deployProject(projectId);
        logDeploymentEvent(`Deployment started for project ${projectId} with ID ${deploymentId}`);
        res.status(202).json({ message: 'Deployment started', deploymentId });
    } catch (error) {
        logDeploymentEvent(`Error starting deployment: ${error.message}`);
        res.status(500).json({ message: 'Error starting deployment', error: error.message });
    }
};

export const getDeploymentStatus = async (req: Request, res: Response) => {
    try {
        const { deploymentId } = req.params;
        const status = await monitorDeployment(deploymentId);
        res.status(200).json({ deploymentId, status });
    } catch (error) {
        logDeploymentEvent(`Error fetching deployment status: ${error.message}`);
        res.status(500).json({ message: 'Error fetching deployment status', error: error.message });
    }
};