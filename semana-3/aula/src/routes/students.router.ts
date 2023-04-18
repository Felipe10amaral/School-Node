import { Request, Response, Router } from 'express'
import studentService from '../services/students.services'
import { authorizationMiddleware } from '../middlewares/authorization.middlewares'

export const routerStudents = Router()

routerStudents.post(
  '/authorization',
  async (request: Request, response: Response) => {
    const { document, password } = request.body
    try {
      const token = await studentService.authorization(document, password)
      return response.status(200).send({ token })
    } catch (error: any) {
      response.status(401).send({ message: error.message })
    }
  },
)

routerStudents.get(
  '/',
  authorizationMiddleware,
  async (request: Request, response: Response) => {
    const students = await studentService.listAll()
    return response.status(200).send(students)
  },
)

routerStudents.post(
  '/',
  authorizationMiddleware,
  (request: Request, response: Response) => {
    const students = studentService.save(request.body)

    return response.status(201).send(students)
  },
)

routerStudents.delete(
  '/remove/:document',
  authorizationMiddleware,
  async (request: Request, response: Response) => {
    const { document } = request.params
    const student = await studentService.delete(document)

    if (!student) {
      return response.status(400).send({ message: 'estudante não encontrado' })
    }

    return response.status(200).send()
  },
)

routerStudents.put(
  '/:document',
  authorizationMiddleware,
  async (request: Request, response: Response) => {
    const { document } = request.params

    const student = await studentService.update(document, request.body)

    if (!student) {
      return response.status(400).send({ message: 'estudante não encontrado' })
    }

    return response.status(200).send({ message: 'atualizado' })
  },
)

routerStudents.get(
  '/:document',
  authorizationMiddleware,
  async (request: Request, response: Response) => {
    const { document } = request.params
    const student = await studentService.listOneStudent(document)

    if (!student) {
      return response.status(400).send({ message: 'estudante não encontrado' })
    }

    return response.status(200).send(student)
  },
)
