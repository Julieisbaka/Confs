import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const buildProject = async (projectPath: string): Promise<void> => {
    try {
        console.log(`Building project at ${projectPath}...`);
        const { stdout, stderr } = await execAsync(`npm run build`, { cwd: projectPath });
        
        if (stderr) {
            console.error(`Build error: ${stderr}`);
            throw new Error(`Build failed: ${stderr}`);
        }

        console.log(`Build output: ${stdout}`);
        console.log('Build completed successfully.');
    } catch (error) {
        console.error(`Error during build: ${error.message}`);
        throw error;
    }
};

export const cleanBuild = async (projectPath: string): Promise<void> => {
    try {
        console.log(`Cleaning build for project at ${projectPath}...`);
        const { stdout, stderr } = await execAsync(`npm run clean`, { cwd: projectPath });

        if (stderr) {
            console.error(`Clean error: ${stderr}`);
            throw new Error(`Clean failed: ${stderr}`);
        }

        console.log(`Clean output: ${stdout}`);
        console.log('Clean completed successfully.');
    } catch (error) {
        console.error(`Error during clean: ${error.message}`);
        throw error;
    }
};