import express from 'express'
import cors from 'cors'
import pool from './conexao.js'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(9000, async () => {
    const data = new Date()
    console.log('Servidor iniciado na porta 9000.', data)

    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
})