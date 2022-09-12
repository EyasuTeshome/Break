import React from 'react'
import './section.modules.css'

function section() {
  return (
    <div className='container' style={{backgroundImage: "url('/images/model-s.jpg')"}}>
      <div className='section-text'>
        <h1>Model S</h1>
        <p className='para'>Order Online for Touchless Delivery</p>
      </div>

      <div className='buttons'>
        <button>Custom Order</button>
        <button className='button2'>Existing Inventory</button>
      </div>
      <img className='downArrow' src="/images/down-arrow.svg" alt="" />

    </div>
  )
}

export default section
