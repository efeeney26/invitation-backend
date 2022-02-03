import { Request, Response } from 'express';

import GuestModel from '../models/guest';

export const getGuests = async (req: Request, res: Response) => {
  try {
    const guests = await GuestModel.find();
    res.send(guests);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err });
  }
};
