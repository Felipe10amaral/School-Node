import {
  deleteOneProduct,
  listAllProduct,
  saveProduct,
  updateOneProduct,
} from '../../repositories/In-memory-db'

interface dataProps {
  id: number
  description: string
  img: string
  price: number
  quantity: number
}

export function register({ id, description, img, price, quantity }: dataProps) {
  const newProduct = {
    id,
    description,
    img,
    price,
    quantity,
  }

  if (!newProduct) {
    return new Error('não é possivel cadastrar um produto vazio')
  }

  const product = saveProduct(newProduct)

  return product
}

export function listAll() {
  const allProducts = listAllProduct()

  return allProducts
}

export function updateProduct(id: string, data: any) {
  const products = listAll()
  const product = products.findIndex((product) => product.id === +id)

  if (product === -1) {
    return -1
  }

  updateOneProduct(product, data)

  return 0
}

export function deleteProduct(id: string) {
  const products = listAll()
  const product = products.findIndex((product) => product.id === +id)

  if (product === -1) {
    return -1
  }

  deleteOneProduct(product)

  return 0
}
