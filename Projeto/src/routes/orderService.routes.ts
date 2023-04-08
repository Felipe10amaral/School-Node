import { Router, Request, Response } from 'express'
import orderServiceServices from '../services/orderService.services'

export const orderServicesRouter = Router()

orderServicesRouter.get('/', async (req: Request, res: Response) => {
  const os = orderServiceServices.getAll()
  return res.status(201).send(os)
})

orderServicesRouter.post('/', async (req: Request, res: Response) => {
  const os = orderServiceServices.create(req.body)

  return res.status(200).send(os)
})
