import { Request, Response, Router } from 'express'

export const routerStudents = Router()

const students = [
  {
    name: 'felipe',
    email: 'felipe@gmail.com',
    document: '123456789',
    password: 123456,
    age: 29,
  },
  {
    name: 'tufao',
    email: 'tufao@gmail.com',
    document: '213456789',
    password: 213456,
    age: 4,
  },
  {
    name: 'tamires',
    email: 'tamires@gmail.com',
    document: '133456789',
    password: 133456,
    age: 29,
  },
]

routerStudents.get('/', (request: Request, response: Response) => {
  return response.status(200).send(students)
})

routerStudents.post('/', (request: Request, response: Response) => {
  const { name, email, document, password, age } = request.body

  const newArray = students.push({
    name,
    email,
    document,
    password,
    age,
  })

  console.log(newArray)

  return response.status(201).send()
})

routerStudents.delete(
  '/remove/:document',
  (request: Request, response: Response) => {
    const { document } = request.params
    console.log(document)

    const student = students.findIndex(
      (documentId) => documentId.document === document,
    )

    if (student === -1) {
      return response.status(400).send({ message: 'estudante não encontrado' })
    }

    students.splice(student, 1)

    return response.status(200).send()
  },
)

routerStudents.put('/:document', (request: Request, response: Response) => {
  const { document } = request.params

  console.log(document)

  const student = students.findIndex(
    (documentId) => documentId.document === document,
  )

  if (student === -1) {
    return response.status(400).send({ message: 'estudante não encontrado' })
  }

  students[student] = request.body

  return response.status(200).send({ message: 'atualizado' })
})

routerStudents.get('/:document', (request: Request, response: Response) => {
  const { document } = request.params
  const student = students.find((student) => student.document === document)

  if (!student) {
    return response.status(400).send({ message: 'estudante não encontrado' })
  }

  return response.status(200).send(student)
})
