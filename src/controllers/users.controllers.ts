import { Request, Response, NextFunction } from 'express'
import axios from 'axios'

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await axios(
      'https://randomuser.me/api/?nat=us,CA&results=1'
    )
    res.status(200).json({
      status: 'success',
      data: data.results,
      message: 'Users retrieved successfully',
    })
  } catch (err) {
    next(err)
  }
}
