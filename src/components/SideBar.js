import React from 'react'
import '../css/sidebar.css';
import { Avatar } from '@mui/material';

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=" />
            
            <div className="profile_details">
                <Avatar/>
                <h4>Ramji Subedi</h4>
                <p>Web Developer</p>
            </div>

            <div className="profile__stats">
                <span>Who viewed your profile</span>
                <span className="stats__number">20</span>
            </div>

            <div className="profile__stats">
                <span>Connection <br></br> <b>Grow your Network</b></span>
                <span className="stats__number">120</span>
            </div>
        </div>

        <div className="sidebar_recent">
            <p>Recent</p>
            <p className="hash"><span>#</span> branding</p>
            <p className="hash"><span>#</span> marketing</p>
            <p className="hash"><span>#</span> webdevelopment</p>
            <p className="hash"><span>#</span> programming</p>
            <p className="hash"><span>#</span> react</p>
            <p className="hash"><span>#</span> flutter</p>
            <p className="hash"><span>#</span> php</p>
            <p className="hash"><span>#</span> ios</p>
            
        </div>
    </div>
  )
}

export default SideBar