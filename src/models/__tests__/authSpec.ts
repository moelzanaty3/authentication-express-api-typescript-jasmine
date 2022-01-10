import UserModel from '../user.model'
import db from '../../database'
import User from '../../types/user.type'

const userModel = new UserModel()

describe('Authentication Module', () => {
  describe('Test methods exists', () => {
    it('should have an Authenticate User method', () => {
      expect(userModel.authenticate).toBeDefined()
    })
  })

  describe('Test Authentication Logic', () => {
    const user = {
      email: 'test@test.com',
      user_name: 'testUser',
      first_name: 'Test',
      last_name: 'User',
      password: 'test123',
    } as User

    beforeAll(async () => {
      const createdUser = await userModel.create(user)
      user.id = createdUser.id
    })

    afterAll(async () => {
      const connection = await db.connect()
      // if you are not using uuid u need to add `\nALTER SEQUENCE users_id_seq RESTART WITH 1;`
      const sql = 'DELETE FROM users;'
      await connection.query(sql)
      connection.release()
    })

    it('Authenticate method should return the authenticated user', async () => {
      const authenticatedUser = await userModel.authenticate(
        user.email,
        user.password as string
      )
      expect(authenticatedUser?.email).toBe(user.email)
      expect(authenticatedUser?.user_name).toBe(user.user_name)
      expect(authenticatedUser?.first_name).toBe(user.first_name)
      expect(authenticatedUser?.last_name).toBe(user.last_name)
    })

    it('Authenticate method should return null for wrong credentials', async () => {
      const authenticatedUser = await userModel.authenticate(
        'mohammed@elzanaty.com',
        'fake-password'
      )
      expect(authenticatedUser).toBe(null)
    })
  })
})
