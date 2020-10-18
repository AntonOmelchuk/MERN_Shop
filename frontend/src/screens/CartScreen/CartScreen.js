import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import CartItem from './components/CartItem'

const CartScreen = ({ history }) => {
  const { cartItems } = useSelector((state) => state.cart)

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message text='Your cart is empty' />
        ) : (
          <ListGroup variatn='flush'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card variant='flush'>
          <ListGroup.Item>
            <h4>Subtotal ({cartItems.reduce((acc, item) => acc + Number.parseInt(item.qty), 0)}) items</h4>$
            {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
