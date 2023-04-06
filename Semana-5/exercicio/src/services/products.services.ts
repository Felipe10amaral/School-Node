import { Product } from '../model/product.model'
import productRepository from '../repository/product.repository'

class StudentServices {
  saveProduct(product: typeof Product) {
    return productRepository.create(product)
  }

  listAllProduct() {
    return productRepository.getAll()
  }

  listOneProduct(id: number) {
    return productRepository.getByDocument(id)
  }

  update(id: string, product: typeof Product) {
    return productRepository.update(+id, product)
  }

  delete(id: string) {
    return productRepository.remove(+id)
  }
}

export default new StudentServices()
