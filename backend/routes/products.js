const { Router } = require('express')
const products = require('../data/products')

const router = Router()

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const product = products.find(item => item.id === req.params._id)

  res.json(product)
})

module.exports = router
