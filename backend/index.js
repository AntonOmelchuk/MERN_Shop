const express = require('express')
const cors = require('cors')
const products = require('./data/products')

const productsRouter = require('./routes/products')

const app = express()

const PORT = process.env.PORT || 9000

app.use(cors())

app.use('/api/products', productsRouter)

app.listen(PORT, console.log(`Server runnig on port ${PORT}`))
