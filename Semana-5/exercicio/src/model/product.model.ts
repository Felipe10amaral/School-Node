import mongoose, { Schema } from 'mongoose'

export const studentSchema = new Schema({
  id: {
    type: Number,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

export const Product = mongoose.model('Product', studentSchema)
