import { OrderService, SchemaOrderService } from '../model/orderService.model'

class OrderServiceRepository {
  async create(orderService: SchemaOrderService) {
    const os = await OrderService.create(orderService)
    return os
  }

  async getAll() {
    const os = await OrderService.find()
    return os
  }

  async getByOneOrder(numberOS: string) {
    return await OrderService.findOne({ numberOS })
  }

  async update(cpf: string, orderService: Partial<typeof OrderService>) {
    return await OrderService.findOne({ cpf }, { $set: orderService })
  }

  async deleteOne(cpf: string) {
    return await OrderService.deleteOne({ cpf })
  }
}

export default new OrderServiceRepository()
