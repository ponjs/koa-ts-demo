import mysql from 'mysql'

export interface Query {
  <T = any>(sql: string | mysql.QueryOptions, values?: any): Promise<T>
  pool: mysql.Pool
}

export default function () {
  const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'koa',
    password: 'koa',
    database: 'koa'
  })

  const query = <T = any>(sql: string | mysql.QueryOptions, values?: any) => {
    return new Promise<T>((reslove, reject) => {
      pool.getConnection((error, connection) => {
        if (error) return reject(error)
        connection.query(sql, values, (err, res) => {
          err ? reject(err) : reslove(res)
          connection.release()
        })
      })
    })
  }

  query.pool = pool

  return query
}
