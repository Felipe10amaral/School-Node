import { OrderService, SchemaOrderService } from '../model/orderService.model'

export class OrderServiceRepository {
  async getAll() {
    return await OrderService.find()
  }

  async getByOneOrder(cpf: string) {
    return await OrderService.findOne({ cpf })
  }

  async create(orderService: SchemaOrderService) {
    const os = await OrderService.create(orderService)
    return os
  }

  async update(cpf: string, orderService: Partial<typeof OrderService>) {
    return await OrderService.findOne({ cpf }, { $set: orderService })
  }

  async deleteOne(cpf: string) {
    return await OrderService.deleteOne({ cpf })
  }
}
