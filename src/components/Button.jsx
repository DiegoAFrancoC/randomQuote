import React from 'react'

const Button = ({randomColor, getRandomAll, colorObj}) => {

    const backgroundObj = {
        backgroundColor: randomColor
    }

  return (
    <div style={colorObj} >
    <button className='card__btn' style={backgroundObj} onClick={getRandomAll}>&#62;</button>
    </div>
  )
}

export default Button