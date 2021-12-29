import { Router } from 'express'
import * as controllers from '../../controllers/users.controllers'

const routes = Router()
// api/users
routes.route('/').get(controllers.getUsers)

export default routes
