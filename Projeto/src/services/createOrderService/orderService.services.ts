import { z } from 'zod'
import orderServiceRepository from '../../repositories/orderService.repository'
import { OrderServiceAlreadyExists } from '../../errors/orderServicesAlreadyExists.error'

class OrderServiceServices {
  /*
  
  getByOrder(cpf: string) {
    orderServiceRepository.getByOneOrder(cpf)
  } */

  async getAll() {
    const response = await orderServiceRepository.getAll()

    return response
  }

  async create(orderService: object) {
    const registerSchema = z.object({
      numberOS: z.string(),
      name: z.string(),
      telefone: z.string(),
      cpf: z.string(),
      model: z.string(),
      repair: z.string(),
      value: z.coerce.number(),
      guarantee: z.string(),
      createdAt: z.date().default(new Date()),
    })

    const os = registerSchema.parse(orderService)
    const { numberOS } = os

    const orderServiceWithSameNumberOs =
      await orderServiceRepository.getByOneOrder(numberOS)

    if (orderServiceWithSameNumberOs) {
      throw OrderServiceAlreadyExists()
    }

    await orderServiceRepository.create(os)
  }
  /*
  remove(cpf: string) {
    return orderServiceRepository.deleteOne(cpf)
  }

  update(cpf: string, orderService: Partial<typeof OrderService>) {
    return orderServiceRepository.update(cpf, orderService)
  } */
}

export default new OrderServiceServices()
