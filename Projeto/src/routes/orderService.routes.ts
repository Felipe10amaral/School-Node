import { Router, Request, Response } from 'express'
import orderServices from '../services/createOrderService/orderService.services'

export const orderServicesRouter = Router()

orderServicesRouter.get('/', async (req: Request, res: Response) => {
  const os = await orderServices.getAll()
  console.log(os)
  return res.status(200).send(os)
})

orderServicesRouter.get('/:numberOS', async (req: Request, res: Response) => {})

orderServicesRouter.post('/', async (req: Request, res: Response) => {
  try {
    await orderServices.create(req.body)
    return res
      .status(201)
      .send({ message: 'Ordem de serviço cadastrada com sucesso' })
  } catch {
    console.log()
    return res
      .status(409)
      .send({ message: 'Ordem de serviço ja possui cadastro' })
  }
})
