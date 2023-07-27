import React from 'react'
import './App.css';
import Start from "./components/Start";
import Device from './components/Device';
import Main from './components/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Start></Start>}></Route>
          <Route path='/device' element={<Device></Device>}></Route>
          <Route path='/main' element={<Main></Main>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
