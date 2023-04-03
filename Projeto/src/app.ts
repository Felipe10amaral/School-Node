import express, { Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from './model/prisma'

export const app = express()

app.use(express.json())

app.post('/users', async (request: Request, response: Response) => {
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
