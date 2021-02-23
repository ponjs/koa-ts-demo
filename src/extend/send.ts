import { Context } from 'koa'

const message = {
  200: 'ok'
}

type Code = keyof typeof message

interface Response<T = any> {
  code: Code
  data?: T
  msg?: string
}

export interface Send {
  <T = any>(res: Response<T>): Response<T>
  <T = any>(code: Code, msg?: string, data?: T): Response<T>
}

export default function (): Send {
  return function <T>(this: Context, code: Code | Response<T>, msg?: string, data: T = null) {
    msg = msg || message[(code as any)?.code || code]
    const response = typeof code === 'number' ? { code, data, msg } : { data, msg, ...code }
    return (this.body = response)
  }
}
