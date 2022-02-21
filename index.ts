import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'

import dbConfig from './db/config';
import guestsRouter from './routes/guests';

config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ['https://efeeney26.github.io/invitation-admin-frontend'],
    optionsSuccessStatus: 200
}))

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
