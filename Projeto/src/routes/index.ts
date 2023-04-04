import { Router } from 'express'
import { userRouter } from './users.routes'

export const routes = Router()

routes.use('/users', userRouter)
