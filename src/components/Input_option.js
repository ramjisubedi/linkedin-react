import React from 'react'

const Input_option = ({Icon, title,tcolor}) => {
  return (
    <div className="option__div">
        <Icon style={{color: tcolor}}/>
        <span>{title}</span>
    </div>
  )
}

export default Input_option