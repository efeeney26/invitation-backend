import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dbConfig from './db/config';
import guestsRouter from './routes/guests';
import authRouter from './routes/auth'

config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://danilanadya.ru',
    'https://efeeney26.github.io/invitation-admin-frontend'
]}));

app.use('/api/auth', authRouter);
app.use('/api/guests', guestsRouter);

app.listen(port, () => {
  console.info(`App listening at http://localhost:${port}`);
});

dbConfig
  .on('error', (err) => {
    console.error(err);
  })
  .once('open', () => {
    console.log('Database Connected Successfully');
  });
