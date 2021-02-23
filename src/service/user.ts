/**
 * 服务层
 * 用于处理数据一系列复杂的操作
 * 函数有可复用性
 */

export function list() {
  console.log(this)
  // 这里操作数据库
  return ['node', 'vue', 'react']
}
