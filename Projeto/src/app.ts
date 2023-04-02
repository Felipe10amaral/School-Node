import express from 'express'
import { PrismaClient } from '@prisma/client'

export const app = express()

const prisma = new PrismaClient()

prisma.orderServices.create({
  data: {
    name: 'Felipe',
    numberOs: 1,
    model: 'iPhone Xr',
    service: 'troca de bateria',
    value: 400,
    guarantee: '90 dias',
  },
})
