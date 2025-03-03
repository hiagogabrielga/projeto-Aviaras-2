import msyql from 'mysql2/promise'

const pool = msyql.createPool({
    host: 'localhost',
    user: 'aviaras',
    password: '12345Aviaras',
    database: 'bancoaviaras'
})

export default pool