
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
  const [purchase, setPurchase] = useState(0)


  const handleMoney2 =()=>{
    if((purchase*-1)>0)
    { 
    const u = {...user}
     u.money += purchase
     setUser(u)
     console.log(typeof(u.money))
     setPurchase(0)
    }
  }
  

  const handleMoney =(amt)=>{
    setPurchase(amt)
    // const u = {...user}
    // u.money += amt 
    // setUser(...user,)
  }
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
    <Header user={user} handleMoney2 ={handleMoney2} setUser = {setUser} purchase = {purchase} handleLoginState = {handleLoginState}/>
      
    <AnimatePresence wait>
    <Routes>
      <Route key={"/login"} path='/login' element ={<Login user = {user}  handleLoginState = {handleLoginState}/>}/>
      <Route key={"/news"} path='/news' element = {<News/>}/>
      <Route key={"/home"} path='/' element = {<Navigate to='/news' />}/>
      <Route key={"/stocks"} path='/stocks' element = {<Stocks handleMoney={handleMoney}/>}/>
    </Routes>
    </AnimatePresence>
    
    </BrowserRouter>
  </div>
    
  );
}


export default App;
