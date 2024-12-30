import express, { Request, Response, NextFunction } from 'express';
import SocketService from './services/webSockets/sockets';
import groupRouter from './routes/groupRoutes';
import messageRouter from './routes/messageRoutes';
import userRouter from './routes/userRoutes';

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes (controllers)
app.use('/groups', groupRouter)
app.use('/users', userRouter);
app.use('/messages', messageRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Express server
const PORT = process.env.PORT || 8000;
const express_server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
