import express from 'express';
import { getAIResponse } from '../services/aiService';

const router = express.Router();

// Endpoint to get AI assistance
router.post('/assist', async (req, res) => {
    const { query } = req.body;

    try {
        const response = await getAIResponse(query);
        res.json({ response });
    } catch (error) {
        console.error('Error fetching AI response:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;