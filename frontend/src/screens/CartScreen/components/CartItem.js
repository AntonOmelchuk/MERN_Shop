import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart, removeCartItem } from '../../../actions/cartActions'
import Select from '../../../components/Select/Select'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const { id, name, price, qty, image, countInStock } = item

  return (
    <Row className='my-3'>
      <Col md={2}>
        <Image src={image} fluid rounded alr={name} />
      </Col>
      <Col md={3}>
        <Link to={`/product/${id}`}>{name}</Link>
      </Col>
      <Col md={2}>${price}</Col>
      <Col md={2}>
        <Select
          selectCounts={countInStock}
          qty={qty}
          onChangehandler={e => dispatch(addItemToCart(id, e.target.value, () => {}, true))}
        />
      </Col>
      <Col md={2}>
        <Button type='button' variant='light' onClick={() => dispatch(removeCartItem(id))}>
          <i className='fas fa-trash' />
        </Button>
      </Col>
    </Row>
  )
}

export default CartItem
