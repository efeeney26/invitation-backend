import { Request, Response } from 'express';
import { handleError } from "./utils";

export const auth = async (req: Request, res: Response) => {
    const {
        body: {
            secret
        }
    } = req
    try {
        if (atob(secret) === process.env.SECRET) {
            res.cookie('auth_inv', 'inv', {
                maxAge: 3600 * 24,
            })
            res.send({
                status: 'OK'
            })
        } else {
            res.status(401).send({ status: 'Неверно' })
        }
    } catch (e) {
        handleError(res, e)
    }
}
