import React from 'react'
import '../css/sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=" />
            
            <div className="profile_details">
                <h4>Ramji Subedi</h4>
                <p>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar