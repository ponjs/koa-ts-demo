import mysql from 'mysql'

export default function () {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
  })

  connection.connect(err => console.log(`mysql connection ${err ? 'failed' : 'successful'}`))

  return connection
}
