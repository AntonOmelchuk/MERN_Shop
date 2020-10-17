import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductItem from '../../components/ProductItem/ProductItem'
import { fetchProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { loading, error, products } = useSelector(
    (state) => state.productsList
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' text={error} />
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <ProductItem product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
