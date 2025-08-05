import express from 'express';
import healthRouter from './route';

const app = express();

app.use(express.json());
app.use('/', healthRouter);

export default app;
