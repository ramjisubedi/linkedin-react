import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Post from './components/Post';
import Widget from './components/Widget';
import Login from './components/Login';
function App() {

  const user = null;
  return (
<>
{
  !user?(<Login />) : (
    <div className="App">
    <Header/>
    <div className="app__body">
     <SideBar/>
     <Post />
     <Widget />
   </div>
   </div>
  )
}

   </> 
    
  );
}

export default App;
