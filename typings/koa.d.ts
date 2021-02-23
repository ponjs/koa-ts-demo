import 'koa'
import { Send } from '../src/extend/send'
import { Query } from '../src/extend/mysql'

declare module 'koa' {
  interface Context {
    send: Send
    db: Query
  }
}
