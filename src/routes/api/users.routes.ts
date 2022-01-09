import { Router } from 'express'
import * as controllers from '../../controllers/users.controllers'

const routes = Router()
// api/users
routes.route('/').post(controllers.create)

export default routes
