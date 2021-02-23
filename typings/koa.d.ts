import 'koa'
import { Connection } from 'mysql'
import { Send } from '../src/extend/send'

declare module 'koa' {
  interface Context {
    send: Send
    db: Connection
  }
}
