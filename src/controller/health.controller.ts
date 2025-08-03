import { Request, Response } from 'express';

const getHealth = (req: Request, res: Response) => {
  res.json({ message: 'API is working' });
};

export { getHealth };
