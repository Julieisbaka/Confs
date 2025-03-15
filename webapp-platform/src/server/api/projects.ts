import { Router } from 'express';
import { Project } from '../../shared/types/index';
import { createProject, updateProject, deleteProject, getProjects } from '../services/storage';

const router = Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects: Project[] = await getProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving projects', error });
    }
});

// Create a new project
router.post('/', async (req, res) => {
    const newProject: Project = req.body;
    try {
        const createdProject = await createProject(newProject);
        res.status(201).json(createdProject);
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error });
    }
});

// Update an existing project
router.put('/:id', async (req, res) => {
    const projectId = req.params.id;
    const updatedProject: Project = req.body;
    try {
        const result = await updateProject(projectId, updatedProject);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error });
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        await deleteProject(projectId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error });
    }
});

export default router;