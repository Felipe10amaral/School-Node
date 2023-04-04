import { z } from 'zod'
import { Router, Request, Response } from 'express'
import { prisma } from '../model/prisma'

export const userRouter = Router()

userRouter.post('/', async (request: Request, response: Response) => {
  const registerSchema = z.object({
    name: z.string(),
    user: z.string(),
    password: z.string().min(6),
  })

  const { name, password, user } = registerSchema.parse(request.body)

  await prisma.adm.create({
    data: {
      name,
      user,
      password_hash: password,
    },
  })

  return response.status(201).send()
})
