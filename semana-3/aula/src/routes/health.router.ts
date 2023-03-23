import { Router, Request, Response } from 'express'

export const routerHealth = Router()

routerHealth.get('/', (request: Request, response: Response) => {
  return response.status(200).send({ message: 'hello' })
})
