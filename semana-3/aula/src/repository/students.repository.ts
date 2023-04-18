import { IStudent, Student } from '../model/students.model'

class StudentRepository {
  async getAll() {
    return await Student.find()
  }

  async getByDocument(document: string) {
    return await Student.findOne({ document })
  }

  async create(student: IStudent) {
    return await Student.create(student)
  }

  async update(document: number, student: Partial<IStudent>) {
    return await Student.updateOne({ document }, { $set: student })
  }

  async remove(document: number) {
    return await Student.deleteOne({ document })
  }
}

export default new StudentRepository()
