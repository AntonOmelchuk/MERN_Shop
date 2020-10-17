import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../../components/ProductItem/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../../actions/productActions'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'

const ProductScreen = ({ match }) => {
  const { id } = match.params
  const dispatch = useDispatch()

  const { details, loading, error } = useSelector((state) => state.productsList)

  useEffect(() => {
    dispatch(fetchDetails(id))
  }, [dispatch])

  const {
    image,
    name,
    rating,
    numReviews,
    price,
    description,
    countInStock,
  } = details

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' text={error} />
      ) : (
        <Row>
          <Col md={6}>
            <Image src={image} alt={name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={rating} text={` ${numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${price}</ListGroup.Item>
              <ListGroup.Item>Description: {description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={countInStock === 0}
                  >
                    ADD TO CART
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
