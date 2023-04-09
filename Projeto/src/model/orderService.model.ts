import mongoose, { InferSchemaType, Schema } from 'mongoose'

export const OrderServiceSchema = new Schema({
  numberOS: {
    type: String,
    unique: true,
  },

  name: {
    type: String,
  },

  telefone: {
    type: String,
  },

  cpf: {
    type: String,
  },

  model: {
    type: String,
  },

  repair: {
    type: String,
  },

  value: {
    type: Number,
  },

  guarantee: {
    type: String,
  },

  createdAt: {
    type: Date,
  },
})

export const OrderService = mongoose.model('OrderService', OrderServiceSchema)
export type SchemaOrderService = InferSchemaType<typeof OrderServiceSchema>
