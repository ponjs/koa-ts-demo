import koa from 'koa'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import router from './src/router'
import send from './src/extend/send'
import db from './src/extend/mysql'

const app = new koa()

app.context.send = send()
app.context.db = db()

app.use(koaBody())
app.use(koaStatic('./src/public'))

router(app)

app.listen(7001, () => console.log('http://127.0.0.1:7001'))
