import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/FormContainer'

const ShippingScreen = ({ history }) => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCoutry] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            value={address}
            required
            placeholder='Enter address'
            onChange={e => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            value={city}
            required
            placeholder='Enter city'
            onChange={e => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            value={postalCode}
            required
            placeholder='Enter postal code'
            onChange={e => setPostalCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            value={country}
            required
            placeholder='Enter country'
            onChange={e => setCoutry(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
