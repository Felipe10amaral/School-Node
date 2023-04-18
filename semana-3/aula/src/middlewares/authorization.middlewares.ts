import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

dotenv.config()

const secretJWT = process.env.JWT_SECRET_KEY || ''

export function authorizationMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers['authorization']

  if (!token) {
    return response.status(401).send({ message: 'acesso negado' })
  }
  const tokenSplited = token.split('Bearer ')

  const decode = verify(tokenSplited[1], secretJWT)

  if (!decode) {
    return response.status(401).send({ message: 'acesso negado' })
  }
  next()
}
