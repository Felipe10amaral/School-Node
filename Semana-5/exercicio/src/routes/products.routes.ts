import { Router, Request, Response } from 'express'

import productsServices from '../services/products.services'

export const routerProducts = Router()

routerProducts.get('/', (request: Request, response: Response) => {
  const arrayProducts = productsServices.listAllProduct()
  return response.status(200).send(arrayProducts)
})

routerProducts.post('/', (request: Request, response: Response) => {
  const { id, description, img, price, quantity } = request.body

  const product = {
    id,
    description,
    img,
    price,
    quantity,
  }

  const save = productsServices.saveProduct(product)

  return response.status(201).send(save)
})

routerProducts.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params
  const product = request.body

  try {
    productsServices.updateOneProduct(id, product)
    return response.status(202).send()
  } catch (error) {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})

routerProducts.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  try {
    productsServices.deleteOneProduct(id)
    return response.status(202).send()
  } catch (error) {
    return response.status(400).send({ message: 'produto não encontrado' })
  }
})
