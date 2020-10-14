import React from 'react'
import PropTypes from 'prop-types'
import RatingStar from './RatingStar'

const Rating = ({ value, text}) => {
  const STAR_NUMBERS = 5
  const starsArray = new Array(STAR_NUMBERS).fill('')

  let rating = value + 1

  return (
    <div className="rating">
      {starsArray.map((_, i) => {
        rating--
        return <RatingStar key={i} value={rating} />
      })}
      <span>{text}</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Rating
