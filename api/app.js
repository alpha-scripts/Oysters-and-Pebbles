import express from 'express'
import cors from 'cors'
import { connectDB } from './lib/db.js'
import carsRouter from './routes/cars.js'
import contactRouter from './routes/contact.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(async (req, res, next) => {
  try {
    await connectDB()
    next()
  } catch (err) {
    next(err)
  }
})

app.use('/api/cars', carsRouter)
app.use('/api/contact', contactRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

export default app
