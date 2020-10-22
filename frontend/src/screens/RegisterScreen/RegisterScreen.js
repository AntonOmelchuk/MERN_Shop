import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/FormContainer'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import { register } from '../../actions/userActions'

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const { user, loading, error } = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user, history, dispatch])

  const onSubmitHandler = e => {
    e.preventDefault()
    if (password !== confirmPass) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' value={name} placeholder='Enter name' onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' value={email} placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            placeholder='Enter password'
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='confirmPass'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            value={confirmPass}
            placeholder='Enter password again'
            onChange={e => setConfirmPass(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' variant='primary' disabled={loading}>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? <Link to={'/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
