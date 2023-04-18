import { sign } from 'jsonwebtoken'
import { IStudent } from '../model/students.model'
import studentRepository from '../repository/students.repository'
import { hash, compare } from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET_KEY || ''

class StudentServices {
  async authorization(document: string, password: string) {
    const student = await studentRepository.getByDocument(document)

    if (!student) {
      throw new Error('estudante não encontrado')
    }

    const auth = await compare(password, student.password)

    if (auth) {
      return sign({ document: student.document }, secret, {
        expiresIn: '1h',
      })
    }
    throw new Error('Senha ou cpf invalido')
  }

  async save(student: IStudent) {
    if (student.password) {
      student.password = await hash(student.password, 10)
    }
    return await studentRepository.create(student)
  }

  async listAll() {
    return await studentRepository.getAll()
  }

  async listOneStudent(document: string) {
    return await studentRepository.getByDocument(document)
  }

  async update(document: string, student: IStudent) {
    return await studentRepository.update(+document, student)
  }

  async delete(document: string) {
    return await studentRepository.remove(+document)
  }
}

export default new StudentServices()
