import { Router, Request, Response } from 'express'

import productsServices from '../services/products.services'

export const routerProducts = Router()

routerProducts.get('/', async (request: Request, response: Response) => {
  const products = await productsServices.listAllProduct()

  return response.status(200).send(products)
})

routerProducts.post('/', async (request: Request, response: Response) => {
  await productsServices.saveProduct(request.body)

  return response
    .status(201)
    .send({ message: 'produto cadastrado com sucesso' })
})

routerProducts.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params
  const product = request.body

  try {
    await productsServices.update(id, product)
    return response.status(202).send({ message: 'produto atualizado' })
  } catch (error) {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})

routerProducts.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params

  try {
    await productsServices.delete(id)
    return response.status(202).send({ message: 'produto excluido' })
  } catch (error) {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})
