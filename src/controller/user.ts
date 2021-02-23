/**
 * 控制层
 * 用于对路由操作的方法
 */

import { Context } from 'koa'
import * as service from '../service/user'

export async function index(ctx: Context) {
  const data = await service.list.call(ctx)
  ctx.send({ code: 200, data })
}
