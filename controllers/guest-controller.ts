import { Request, Response } from 'express';

import GuestModel from '../models/guest';
import { handleError } from "./utils";

export const getGuests = async (req: Request, res: Response) => {
  try {
    const guests = await GuestModel.find();
    res.send(guests);
  } catch (err) {
    handleError(res, err)
  }
};

export const addGuest = async (req: Request, res: Response) => {
  const {
    body: {
      name,
      invitation,
      accept
    }
  } = req
  try {
    const isGuestExist = Boolean(await GuestModel.findOne({ name }))
    if (isGuestExist) {
      handleError(res, new Error('Такой гость уже существует'))
      return
    }
    const newGuest = await GuestModel.create({
      name,
      invitation,
      accept
    })
    res.send(newGuest)
  } catch (err) {
    handleError(res, err)
  }
}

export const deleteGuest = async (req: Request, res: Response) => {
  const {
    body: {
      guest
    }
  } = req
  try {
    if (Boolean(await GuestModel.findByIdAndDelete(guest))) {
      res.send({ message: `Гость ${guest.name} удален`})
    } else {
      handleError(res, new Error('Пользователя для удаления не существует'))
    }
  } catch (e) {
    handleError(res, e)
  }
}

export const updateGuest = async (req: Request, res: Response) => {
  const {
    body: {
      guest
    }
  } = req
  try {
    if (Boolean(await GuestModel.findByIdAndUpdate(guest, { ...guest }))) {
      res.send({ message: 'Данные по гостю обновлены'})
    } else {
      handleError(res, new Error('Пользователя для обновления не существует'))
    }
  } catch (e) {
    handleError(res, e)
  }
}
