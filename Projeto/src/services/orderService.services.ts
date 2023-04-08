import orderServiceRepository from '../repositories/orderService.repository'
import { OrderService } from '../model/orderService.model'

class OrderServiceServices {
  getAll() {
    orderServiceRepository.getAll()
  }

  getByOrder(cpf: string) {
    orderServiceRepository.getByOneOrder(cpf)
  }

  create(orderService: typeof OrderService) {
    return orderServiceRepository.create(orderService)
  }

  remove(cpf: string) {
    return orderServiceRepository.deleteOne(cpf)
  }

  update(cpf: string, orderService: Partial<typeof OrderService>) {
    return orderServiceRepository.update(cpf, orderService)
  }
}

export default new OrderServiceServices()
