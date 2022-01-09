import { Request, Response, NextFunction } from 'express'
import UserModel from '../models/user.model'

const userModel = new UserModel()

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.create(req.body)
    res.json({
      status: 'success',
      data: { ...user },
      message: 'User created successfully',
    })
  } catch (err) {
    next(err)
  }
}

export const getMany = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userModel.getMany()
    res.json({
      status: 'success',
      data: users,
      message: 'User retrieved successfully',
    })
  } catch (err) {
    next(err)
  }
}

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.getOne(req.params.id as unknown as number)
    res.json({
      status: 'success',
      data: user,
      message: 'User retrieved successfully',
    })
  } catch (err) {
    next(err)
  }
}

export const updateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.updateOne(req.body)
    res.json({
      status: 'success',
      data: user,
      message: 'User updated successfully',
    })
  } catch (err) {
    next(err)
  }
}

export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userModel.deleteOne(req.params.id as unknown as number)
    res.json({
      status: 'success',
      data: user,
      message: 'User deleted successfully',
    })
  } catch (err) {
    next(err)
  }
}
