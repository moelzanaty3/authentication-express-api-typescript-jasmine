import { Router } from 'express'
import * as controllers from '../../controllers/users.controllers'

const routes = Router()
// api/users
routes.route('/').post(controllers.create)
routes.route('/').get(controllers.getMany)
routes.route('/:id').get(controllers.getOne)
routes.route('/:id').patch(controllers.updateOne)
routes.route('/:id').delete(controllers.deleteOne)

export default routes
