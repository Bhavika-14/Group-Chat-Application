import express, { Request, Response, NextFunction } from 'express';
import SocketService from './sockets';

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes (controllers)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Express server
const PORT = process.env.PORT || 3000 || 3001 || 3002;
const express_server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Initialize Socket Service
const socketService = new SocketService(express_server);
//socketService.io.attach(express_server)
socketService.initListeners();