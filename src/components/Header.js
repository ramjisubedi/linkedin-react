import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../css/header.css';
import HeaderMenu from './HeaderMenu'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" className="header__search_input" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderMenu Icon={HomeIcon} title="Home" />
        <HeaderMenu Icon={PeopleIcon} title="People" />
        <HeaderMenu Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderMenu Icon={MessageIcon} title="Message" />
        <HeaderMenu Icon={NotificationsIcon} title="Notification" />
        <HeaderMenu avatar={Avatar} title="Ramji" />
      </div>
    </div>
  )
}
export default Header;