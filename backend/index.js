import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'

import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/error.js'

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

const PORT = process.env.PORT || 9000

app.use(cors())

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, console.log(`Server runnig in ${process.env.NODE_ENV} mode on port ${PORT}`))
