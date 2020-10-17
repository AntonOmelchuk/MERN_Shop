import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import productsRouter from './routes/products.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

connectDB()

const PORT = process.env.PORT || 9000

app.use(cors())

app.use('/api/products', productsRouter)

app.listen(PORT, console.log(`Server runnig in ${process.env.NODE_ENV} mode on port ${PORT}`))
