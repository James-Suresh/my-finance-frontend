import './Login.scss' 
import LockIcon from '@mui/icons-material/Lock';
import { AnimatePresence, motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = ({user,handleLoginState}) => {

    const navigate = useNavigate();
    const [toggleRegister, setRegister] = useState(false);
    const [toggleLogin, setLogin] = useState(true);
    
   
    const  handleLogin = async (e) => {
        e.preventDefault();
        if(e.target.username.value === "" && e.target.password.value === ""){
            toast.error("Fields cannot be empty");
            return;
        }
        if(e.target.username.value === ""){
            toast.error("Username cannot be empty");
            return;
        }
        
        if(e.target.password.value === ""){
            toast.error("Password cannot be empty");
            return;
        }
        
        const options = {
            method: 'POST',
            url: process.env.REACT_APP_BACKEND_URL + '/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
               username: e.target.username.value,
                password: e.target.password.value
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data.message);
           
            console.log(response.data);
            handleLoginState(response.data.user);
            navigate('/news');
          } catch (error) {
         console.log(error);
         toast.error(error.response.data);
        
          }
        
        return;
    }
    const handleRegister =async (e) => {
        e.preventDefault();
        if(e.target.username.value === "" && e.target.password.value === ""){
            toast.error("Fields cannot be empty");
            return;
        }
        if(e.target.username.value === ""){
            toast.error("Username cannot be empty");
            return;
        }
        
        if(e.target.password.value === ""){
            toast.error("Password cannot be empty");
            return;
        }
        if(e.target.password.value === e.target.repassword.value){
            
            const options = {
                method: 'POST',
                url: process.env.REACT_APP_BACKEND_URL + '/users/register',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                username: e.target.username.value,
                password: e.target.password.value
                }
            };
            try {
                console.log(e.target.username.value)
                const response = await axios.request(options);
                toast.success(response.data);
                
              } catch (error) {
             console.log(error);
             toast.error(error.response.data);
            
              }
            
            return;
            
        }else{
            toast.error("Passwords do not match");
            return;
        }
        
        }
        useEffect(() => {
            if(user){
                navigate('/news');
            }
        }, [user])
  
    return (
       
        <div className="login">
            <ToastContainer hideProgressBar={true}/>
         

            <AnimatePresence>
            {toggleLogin && (
                <>
            <h1 className='login__title'>Login</h1>  
        <motion.div 
        
        exit={{ rotateY:90}}
        className="login__component" 
        onAnimationComplete={() => {setRegister(true)}}
        >
        <form className="login-form" onSubmit={handleLogin}>
            
        <AccountCircleIcon className="login-form__icon" />
            <h3 className="login-form__title">Sign In</h3>
            <div className="login-form__input-div">
                <label htmlFor="username">USERNAME</label>
                <input className='login-form__input' type="text" name="username" id="username" />
            </div>      
    
            <div className="login-form__input-div"> 
                <label htmlFor="password">PASSWORD</label>
                <input className='login-form__input' type="password" name="password" id="password" />
            </div>      
            <button className="login-form__button">Login</button>
            <p className="login-form__text">Don't have an account? <a onClick={()=>setLogin(false)} >Register</a></p>
            {/* <p className="login-form__text">Forgot your password? <a >Reset</a></p> */}
        </form>  
        </motion.div>
        </>
        )}
        </AnimatePresence>
        <AnimatePresence>    
        {toggleRegister && (
                <>
              
              <h1 className='login__title'>Register</h1>  
        <motion.div 

       
        exit={{ rotateY:90}}
       onAnimationComplete={() => {setLogin(true)}}
        className="login__component login__component2" >
        <form className="login-form" onSubmit={handleRegister}>
            
            <AccountCircleIcon className="login-form__icon" />
            <h3 className="login-form__title">Sign Up</h3>
            <div className="login-form__input-div">
                <label htmlFor="username">USERNAME</label>
                <input className='login-form__input' type="text" name="username" id="username" />
            </div>      
    
            <div className="login-form__input-div"> 
                <label htmlFor="password">PASSWORD</label>
                <input className='login-form__input' type="password" name="password" id="password" />
                
            </div>   
            <div className="login-form__input-div"> 
                <label htmlFor="password">RENTER PASSWORD</label>
                <input className='login-form__input' type="password" name="repassword" id="repassword" />
            </div>      
            <button className="login-form__button" >REGISTER</button>
            <p className="login-form__text">Have an account? <a onClick={()=>setRegister(false)} >Login</a></p>
            {/* <p className="login-form__text">Forgot your password? <a >Reset</a></p> */}
        </form>  
        </motion.div>
        </>)}
        </AnimatePresence>
        
        
        </div>
    );
    
}

export default Login;