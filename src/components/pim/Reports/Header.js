import React from 'react'

const Header = ({headerValue}) => {
  return (
    <div className='form-header'><p className="h4 mt-3 ms-4">{headerValue}</p></div>
  )
}

export default Header