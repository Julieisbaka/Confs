import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../server/api/projects';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    if (loading) {
        return <div>Loading projects...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Your Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;