import React from 'react'

const Header = ({head, text}) => {
  return (
    <div className="page-container">
        <div className="head">
            <h1>{head}</h1>
            <p>{text}</p>
        </div>
    </div>
    
  )
}

export default Header