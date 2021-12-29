import express, { Application, Request, Response } from 'express'

const PORT = 3000
// create an instance server
const app: Application = express()

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍',
  })
})
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
export default app
