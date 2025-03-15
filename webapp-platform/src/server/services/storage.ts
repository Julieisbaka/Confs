import { promises as fs } from 'fs';
import path from 'path';

const storageDirectory = path.join(__dirname, '../../storage');

export const saveFile = async (fileName: string, content: string): Promise<void> => {
    const filePath = path.join(storageDirectory, fileName);
    await fs.writeFile(filePath, content, 'utf8');
};

export const readFile = async (fileName: string): Promise<string> => {
    const filePath = path.join(storageDirectory, fileName);
    return await fs.readFile(filePath, 'utf8');
};

export const deleteFile = async (fileName: string): Promise<void> => {
    const filePath = path.join(storageDirectory, fileName);
    await fs.unlink(filePath);
};

export const listFiles = async (): Promise<string[]> => {
    return await fs.readdir(storageDirectory);
};