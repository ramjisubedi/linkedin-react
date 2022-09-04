import React, {forwardRef} from 'react'
import {Avatar} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post_content = forwardRef(({name, description,message,photoURL},ref) => {
  return (
    <div className="post__message" ref={ref}>
        <div className="post__message__header">
            <div className="post__message__header__left">
                <Avatar src={photoURL} />
                <div className="post__profile_details">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__message__header__left">
                <MoreVertIcon />
            </div>
        </div>
        <div className="post__message__body">
           <p>{message}</p>
        </div>
        <div className="post__message__footer">
            <div className="post__footer__option">
            <ThumbUpAltIcon />
            <span>Like</span>
            </div>
            <div className="post__footer__option">
            <CommentIcon />
            <span>Comment</span>
            </div>
            <div className="post__footer__option">
            <ShareIcon />
            <span>Share</span>
            </div>
            <div className="post__footer__option">
            <SendIcon /> 
            <span>Send</span>
            </div>
              
        </div>
    </div>
  )
})

export default Post_content