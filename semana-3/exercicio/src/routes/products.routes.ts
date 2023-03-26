import { Router, Request, Response } from 'express'
import {
  deleteProduct,
  listAll,
  register,
  updateProduct,
} from '../http/controller/register-products-controller'

export const routerProducts = Router()

routerProducts.get('/', (request: Request, response: Response) => {
  const arrayProducts = listAll()
  return response.status(200).send(arrayProducts)
})

routerProducts.post('/', (request: Request, response: Response) => {
  const { id, description, img, price, quantity } = request.body

  const data = {
    id,
    description,
    img,
    price,
    quantity,
  }

  const save = register(data)

  return response.status(201).send(save)
})

routerProducts.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params
  const data = request.body

  const result = updateProduct(id, data)

  if (result === 0) {
    return response.status(202).send()
  } else {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})

routerProducts.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  const result = deleteProduct(id)

  if (result === 0) {
    return response.status(202).send()
  } else {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})
