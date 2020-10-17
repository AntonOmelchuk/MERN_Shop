import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => (
  <Spinner
    animation='border'
    role='status'
    style={{
      width: '100px',
      height: '100px',
      margin: '200px auto 0',
      display: 'block',
    }}
  >
    <span class='sr-only'>Loading...</span>
  </Spinner>
)

export default Loader
