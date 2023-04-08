import { Router, Request, Response } from 'express'

export const userRouter = Router()

userRouter.get('/', async (request: Request, response: Response) => {
  return response.status(201).send()
})
