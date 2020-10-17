import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant = 'info', text }) => (
  <Alert variant={variant}>{text}</Alert>
)

export default Message
