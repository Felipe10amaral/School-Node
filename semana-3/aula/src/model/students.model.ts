import mongoose, { Schema } from 'mongoose'

export interface IStudent {
  name: string
  email: string
  document: string
  password: string
  age: number
  createdAt: Date | string
}

export const studentSchema = new Schema<IStudent>({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  document: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

export const Student = mongoose.model<IStudent>('Student', studentSchema)
