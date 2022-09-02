import React from 'react'
import {Avatar} from '@mui/material';
import Input_option from './Input_option'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../css/post.css"
import Post_content from './Post_content'


const Post = () => {
  return (
    <div className="post">
        <div className="post__block">
            <div className="post__input">
                <Avatar />
                <form>
                    <input type="text" className="" placeholder="Whats in your ming?" />
                    <button className="btn btn" type="submit">Post</button>
                </form>
            </div>
            <div className="post__option">
                <Input_option Icon={PhotoCameraIcon} tcolor="#70b5f9" title="Camera" />
                <Input_option Icon={YouTubeIcon} tcolor="#7fc15e" title="Video" />
                <Input_option Icon={TodayIcon} tcolor="#e7a33e" title="Event" />
                <Input_option Icon={AssignmentIcon} tcolor="#fc9295" title="Write Article" />
            </div>
        </div>
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
        <Post_content name="Ramji Subedi" description="We are learning react js" message="Hello this is body section." photoURL="" />
    </div>
  )
}

export default Post