import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export const deployProject = async (projectPath: string, environment: string) => {
    try {
        // Build the project before deployment
        await execPromise(`npm run build --prefix ${projectPath}`);

        // Deploy the project to the specified environment
        const deployCommand = getDeployCommand(environment);
        const { stdout, stderr } = await execPromise(deployCommand);

        if (stderr) {
            console.error(`Deployment error: ${stderr}`);
            throw new Error('Deployment failed');
        }

        console.log(`Deployment successful: ${stdout}`);
        return stdout;
    } catch (error) {
        console.error(`Error during deployment: ${error.message}`);
        throw error;
    }
};

const getDeployCommand = (environment: string): string => {
    switch (environment) {
        case 'production':
            return 'your-production-deploy-command';
        case 'staging':
            return 'your-staging-deploy-command';
        default:
            throw new Error('Invalid environment specified');
    }
};