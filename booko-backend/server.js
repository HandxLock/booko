import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT

const app = express()

app.use(express.json())


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))


app.listen(PORT, console.log(`Server on http://localhost:${PORT}`))