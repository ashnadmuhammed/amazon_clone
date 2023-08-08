import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
function App() {
  return (
   
    <BrowserRouter>
    <div>
      <header>
      <a href='/'>amazon</a>
      </header>
      {/* <HomeScreen/> */}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
    
      </main>
    </div>
    </BrowserRouter>
  );
  
}

export default App;


