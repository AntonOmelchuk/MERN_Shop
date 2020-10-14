const express = require('express')

const productsRouter = require('./routes/products')

const app = express()

const PORT = process.env.PORT || 9000

app.use('/products', productsRouter)

app.listen(PORT, console.log(`Server runnig on port ${PORT}`))
