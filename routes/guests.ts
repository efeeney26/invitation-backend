import express from 'express';

import { getGuests } from '../controllers/guest-controller';

const router = express.Router();

router
  .get('/', getGuests);

export default router;
