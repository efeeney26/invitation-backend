import express from 'express';

import { guestController } from '../controllers'

const router = express.Router();

router
  .get('/', guestController.getGuests)

  .post('/addGuest', guestController.addGuest)

  .patch('/deleteGuest', guestController.deleteGuest)

  .patch('/updateGuest', guestController.updateGuest)

export default router;
