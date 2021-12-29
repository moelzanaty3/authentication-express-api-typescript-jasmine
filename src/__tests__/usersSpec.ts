import supertest from 'supertest'
import * as controllers from '../controllers/users.controllers'
import app from '../'

// create a request object
const request = supertest(app)

describe('Test User Api Endpoints', () => {
  it('expect function to get user defined', async () => {
    expect(controllers.getUsers).toBeDefined()
  })
  it('should get list of users', async () => {
    const response = await request.get('/api/users')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Users retrieved successfully')
  })
})
