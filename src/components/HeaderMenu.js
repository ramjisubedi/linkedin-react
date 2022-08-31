import React from 'react'
import { Avatar } from '@mui/material';

const HeaderMenu = ({Icon, title,avatar}) => {
  return (
    <div className="header__menu">
        {
            Icon && <Icon/>
        }{
            avatar && <Avatar name={avatar} />
        }
       
        <span>{title}</span>
    </div>
  )
}

export default HeaderMenu