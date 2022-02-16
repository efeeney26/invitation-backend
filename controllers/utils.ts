import { Response } from "express";

export const handleError = (res: Response, error: unknown) => {
    console.error(error)
    const { message } = error as Record<string, unknown>
    res.status(500).send({ message })
}
