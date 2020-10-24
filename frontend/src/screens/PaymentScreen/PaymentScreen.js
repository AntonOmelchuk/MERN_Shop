import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/FormContainer'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import { savePaymentMethod } from '../../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const { shippingAddress } = useSelector(state => state.cart)

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const onSubmitHandler = e => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  if (!shippingAddress) {
    history.push('/shipping')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='title-paddings'>Payment Method</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={e => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
