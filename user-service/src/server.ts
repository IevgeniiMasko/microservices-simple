import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRouter from './api/user.route';
import errorHandler from './api/middleware/error-handler';

const server = express();

server.use(express.json({ limit: '50mb' }));
server.use(helmet());
server.use(cors());
server.use(morgan('combined'));

server.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

server.use('/v1/users', userRouter);

server.use(errorHandler);

export default server;
