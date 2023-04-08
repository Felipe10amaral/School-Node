import { OrderService } from '../model/orderService.model'

class OrderServiceRepository {
  async getAll() {
    return await OrderService.find()
  }

  async getByOneOrder(cpf: string) {
    return await OrderService.findOne({ cpf })
  }

  async create(orderService: typeof OrderService) {
    return await OrderService.create(orderService)
  }

  async update(cpf: string, orderService: Partial<typeof OrderService>) {
    return await OrderService.findOne({ cpf }, { $set: orderService })
  }

  async deleteOne(cpf: string) {
    return await OrderService.deleteOne({ cpf })
  }
}

export default new OrderServiceRepository()
