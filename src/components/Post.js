import React, {useEffect, useState} from 'react'
import {Avatar} from '@mui/material';
import Input_option from './Input_option'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../css/post.css"
import Post_content from './Post_content'
import {collection,addDoc,serverTimestamp,onSnapshot,query,orderBy} from 'firebase/firestore'
import {db} from '../firebase'
import FlipMove from 'react-flip-move'




const Post = () => {
const [input, setInput] = useState();
const [dbposts, setPost] = useState([]);
const postData = collection(db,'posts')
const submitPost = (e)=>{
    e.preventDefault();
    
    addDoc(postData,
        {
            name:"Ramji Subedi",
            description:"Hello description",
            message:input,
            photoUrl:"https://yt3.ggpht.com/yti/AJo0G0kOL2hVIVd8MfblksM5D_lKhmQMElu_IV_xGKXF=s88-c-k-c0x00ffffff-no-rj-mo",
            timestamp:serverTimestamp()
        }).then(response => {
            setInput('');
            console.log('data added')
        }).catch(error =>{
            console.log('not added')
        })
    // db.collection('posts').add(
    //    {
    //     name:"Ramji Subedi",
    //     description:"Hello description",
    //     message:input,
    //     photoUrl:"https://yt3.ggpht.com/yti/AJo0G0kOL2hVIVd8MfblksM5D_lKhmQMElu_IV_xGKXF=s88-c-k-c0x00ffffff-no-rj-mo",
    //     timestamp:""
    // }
    // );

}


useEffect(() => {
   const q = query(postData, orderBy("timestamp",'desc'));
   const posts = onSnapshot(q, (snapshot) => setPost(snapshot.docs.map((doc) => ({
    data:doc.data(), id:doc.id
   }))))

})
  return (
    <div className="post">
        <div className="post__block">
            <div className="post__input">
                <Avatar />
                <form onSubmit={submitPost}>
                    <input onChange={e=>setInput(e.target.value)} value={input} type="text" className="" placeholder="Whats in your ming?" />
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
        <FlipMove>
        {
            dbposts.map(({id,data:{name,description,message,photoURL}})=>{
                return <Post_content key={id} name={name} description={description} message={message} photoURL={photoURL} />
            })
        }
        </FlipMove>
    </div>
  )
}

export default Post