import React from 'react'
import PropTypes from 'prop-types'

const RatingStar = ({ value, color }) => {
  return (
    <>
    <span>
      <i
        style={{color}}
        className={
          value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }
      ></i>
    </span>
    </>
  )
}

RatingStar.defaultProps = {
  color: '#ff824c'
}

RatingStar.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
}

export default RatingStar
