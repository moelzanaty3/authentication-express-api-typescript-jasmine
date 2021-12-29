import { Response, Request, NextFunction } from 'express'

class HttpException extends Error {
  status: number

  message: string

  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500
  const message = error.message || 'Whoops!! something went wrong'
  res.status(status).json({ status, message })
}

export default errorMiddleware
