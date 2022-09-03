import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Post from './components/Post';
import Widget from './components/Widget';
import Login from './components/Login';
import { useSelector,useDispatch } from 'react-redux';
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase';
import {loginUser,logoutUser,selectUser} from './features/userSlice'
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true);
useEffect(() => {
  onAuthStateChanged(auth,(user) => {
console.log(user)
if(user){
  dispatch(loginUser({
    email: user.email,
    uid: user.uid,
    photoUrl:user.photoURL,
    displayName: user.displayName
  }))
  setLoading(false);
}else{
  dispatch(logoutUser())
  setLoading(false);
}
  })
},[])

  return (
<>
{
  (!loading)?
    !user?(<Login />) : (
      <div className="App">
      <Header/>
      <div className="app__body">
       <SideBar/>
       <Post />
       <Widget />
     </div>
     </div>
    ):''
}

   </> 
    
  );
}

export default App;
