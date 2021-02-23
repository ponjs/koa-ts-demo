/**
 * 服务层
 * 用于处理数据一系列复杂的操作
 * 函数有可复用性
 */

import { Context } from 'koa'

export async function list(this: Context) {
  // 这里操作数据库
  return this.db('SELECT * FROM test')
}
