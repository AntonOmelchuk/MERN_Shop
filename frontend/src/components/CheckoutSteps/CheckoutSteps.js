import React from 'react'
import { Nav } from 'react-bootstrap'
import StepItem from './StepItem'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center md-4'>
      <StepItem step={step1} url='login' title='Sign In' />
      <StepItem step={step2} url='shipping' title='Shipping' />
      <StepItem step={step3} url='payment' title='Payment' />
      <StepItem step={step4} url='placeorder' title='Place Order' />
    </Nav>
  )
}

export default CheckoutSteps
