
import logo from './logo.svg';
import './App.scss';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import News from './Pages/News/News';
import Header from './Components/Header/Header';
import Stocks from './Pages/Stocks/Stocks';
import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null)

  
  const handleLoginState = (user_info) =>{
    //user logged in
    
    if(user_info) 
    toast.success("Login Successful")
    else
    toast.success("Logout Successful")

    setUser(user_info)
  }
  
 
  return (
    
    
  <div className="App">
    
    <ToastContainer/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    <BrowserRouter>
    <Header user={user} handleLoginState = {handleLoginState}/>
      
    <AnimatePresence wait>
    <Routes>
      <Route key={"/login"} path='/login' element ={<Login user = {user}  handleLoginState = {handleLoginState}/>}/>
      <Route key={"/news"} path='/news' element = {<News/>}/>
      <Route key={"/home"} path='/' element = {<Navigate to='/news' />}/>
      <Route key={"/stocks"} path='/stocks' element = {<Stocks/>}/>
    </Routes>
    </AnimatePresence>
    
    </BrowserRouter>
  </div>
    
  );
}


export default App;
