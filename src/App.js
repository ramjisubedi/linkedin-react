import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Post from './components/Post';
import Widget from './components/Widget';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app__body">
      <SideBar/>
      <Post />
      <Widget />
    </div>
    </div>
    
  );
}

export default App;
