import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import areatrabajo from './routes/areatrabajo.routes.js'
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(areatrabajo)

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))


app.listen(PORT, console.log(`Server on http://localhost:${PORT}`))