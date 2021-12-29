import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

export default {
  port: PORT,
}
