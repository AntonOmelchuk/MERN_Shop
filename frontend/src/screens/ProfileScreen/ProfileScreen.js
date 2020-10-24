import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/FormContainer'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import { getUserProfile, register, updateUserProfile } from '../../actions/userActions'

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [message, setMessage] = useState(null)

  const { user, loading, error, success } = useSelector(state => state.user)

  useEffect(() => {
    if (!user) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserProfile())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [user, history, dispatch])

  const onSubmitHandler = e => {
    e.preventDefault()
    if (password !== confirmPass) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile(name, email, password))
    }
  }

  if (loading && !user) {
    return <Loader />
  }

  return (
    <Row>
      <Col md={6}>
        <FormContainer>
          <h3>PROFILE INFO</h3>
          {message && <Message variant='danger'>{message}</Message>}
          {success && <Message variant='success'>Profile Updated</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' value={name} placeholder='Enter name' onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                value={email}
                placeholder='Enter email'
                onChange={e => setEmail(e.target.value)}
              />
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

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        </FormContainer>
      </Col>
      <Col md={6}>
        <h3>MY ORDERS</h3>
      </Col>
    </Row>
  )
}

export default ProfileScreen
