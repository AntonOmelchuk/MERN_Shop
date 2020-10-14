import { Router } from 'express'
import products from '../data/products.js'

const router = Router()

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const product = products.find(item => item.id === req.params._id)

  res.json(product)
})

export default router
