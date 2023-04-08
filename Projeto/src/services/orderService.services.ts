import { OrderServiceRepository } from '../repositories/orderService.repository'
// import { OrderService } from '../model/orderService.model'
import { z } from 'zod'

class OrderServiceServices {
  constructor(private orderServiceRepository = new OrderServiceRepository()) {}

  getAll() {
    this.orderServiceRepository.getAll()
  }
  /*
  getByOrder(cpf: string) {
    orderServiceRepository.getByOneOrder(cpf)
  } */

  create(data: object) {
    const registerSchema = z.object({
      name: z.string(),
      telefone: z.string(),
      cpf: z.string(),
      model: z.string(),
      repair: z.string(),
      value: z.coerce.number(),
      guarantee: z.string(),
      createdAt: z.date().default(new Date()),
    })

    const os = registerSchema.parse(data)

    const response = this.orderServiceRepository.create(os)
    return response
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
