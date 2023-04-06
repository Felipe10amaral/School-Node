import { Product } from '../model/product.model'

class ProductRepository {
  getAll() {
    return Product.find()
  }

  getByDocument(id: number) {
    return Product.findOne({ id })
  }

  create(product: typeof Product) {
    return Product.create(product)
  }

  update(id: number, product: Partial<typeof Product>) {
    return Product.updateOne({ id }, { $set: product })
  }

  remove(id: number) {
    return Product.deleteOne({ id })
  }
}

export default new ProductRepository()
