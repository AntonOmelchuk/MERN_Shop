import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const StepItem = ({ step, url, title }) => {
  return (
    <Nav.Item>
      {step ? (
        <LinkContainer to={`/${url}`}>
          <Nav.Link>{title}</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>{title}</Nav.Link>
      )}
    </Nav.Item>
  )
}

export default StepItem
