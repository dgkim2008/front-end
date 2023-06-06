import React from 'react'
import './App.css';
import Start from "./components/Start";
import Device from './components/Device';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Start></Start>}></Route>
          <Route path='/device' element={<Device></Device>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
