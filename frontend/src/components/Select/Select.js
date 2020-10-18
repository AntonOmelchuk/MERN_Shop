import React from 'react'
import { Form } from 'react-bootstrap'

const Select = ({ qty, selectCounts, onChangehandler }) => {
  const value = selectCounts > qty ? qty : selectCounts

  return (
    <Form.Control as='select' value={Number.parseInt(value)} onChange={onChangehandler}>
      {Array.from(Array(selectCounts).keys()).map((i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </Form.Control>
  )
}

export default Select
