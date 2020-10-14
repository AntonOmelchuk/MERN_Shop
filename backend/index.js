import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import products from './data/products.js'

import productsRouter from './routes/products.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 9000

app.use(cors())

app.use('/api/products', productsRouter)

app.listen(PORT, console.log(`Server runnig in ${process.env.NODE_ENV} mode on port ${PORT}`))
