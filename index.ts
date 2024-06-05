// import necessary library to setup express server
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// create api endpoint returns "Hello, world" with GET METHOD
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world');
});

// setup server to listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});