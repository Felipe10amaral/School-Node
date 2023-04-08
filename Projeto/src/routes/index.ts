import { Router } from 'express'
import { orderServicesRouter } from './orderService.routes'

export const routes = Router()

routes.use('/order', orderServicesRouter)
