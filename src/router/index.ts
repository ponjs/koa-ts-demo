import Koa from 'koa'
import Router from 'koa-router'
import fs from 'fs'
import path from 'path'

const routes: Router[] = fs
  .readdirSync(__dirname)
  .filter(file => file !== path.basename(__filename))
  .map(file => require(path.join(__dirname, file)).default)

export default (app: Koa) => {
  routes.forEach(router =>
    app.use(router.routes()).use(router.allowedMethods())
  )
}
