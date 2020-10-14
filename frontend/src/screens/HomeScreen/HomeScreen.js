import React, { useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import ProductItem from '../../components/ProductItem/ProductItem'
import { BASE_URL } from '../../constants/general'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await axios(`${BASE_URL}/api/products`)

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.length > 0 && products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <ProductItem product={product} />
          </Col>
        ) )}
      </Row>
    </>
  )
}

export default HomeScreen
