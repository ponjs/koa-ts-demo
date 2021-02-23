import Router from 'koa-router'
import * as controller from '../controller/user'
import time from '../middleware/time'

const router = new Router({ prefix: '/user' })

router.get('/', time, controller.index)

export default router
