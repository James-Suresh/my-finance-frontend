
import logo from './logo.svg';
import './App.scss';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import News from './Pages/News/News';
import Header from './Components/Header/Header';
import Stocks from './Pages/Stocks/Stocks';
import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";

function App() {
 
  return (
  <div className="App">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    <BrowserRouter>
    <Header>
      
    </Header>
    <AnimatePresence wait>
    <Routes>
      <Route key={"/login"} path='/login' element ={<Login/>}/>
      <Route key={"/news"} path='/news' element = {<News/>}/>
      <Route key={"/home"} path='/' element = {<News/>}/>
      <Route key={"/stocks"} path='/stocks' element = {<Stocks/>}/>
    </Routes>
    </AnimatePresence>
    
    </BrowserRouter>
  </div>
    
  );
}


export default App;
