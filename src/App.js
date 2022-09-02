import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Post from './components/Post';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app__body">
      <SideBar/>
      <Post />
    </div>
    </div>
    
  );
}

export default App;
