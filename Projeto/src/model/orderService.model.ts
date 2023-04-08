import mongoose, { Schema } from 'mongoose'

export const OrderServiceSchema = new Schema({
  name: {
    type: String,
  },

  telefone: {
    type: String,
  },

  cpf: {
    type: String,
    unique: true,
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

  createAt: {
    type: Date,
    default: new Date(),
  },
})

export const OrderService = mongoose.model('OrderService', OrderServiceSchema)
