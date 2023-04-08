import './Login.scss' 
import Paper from '@mui/material/Paper';

const Login = () => {
    return (
        <div className="login">
            <h1 className='login__title'>Login</h1>
        <Paper  className="login__component" elevation={3}>
        <form className="login-form">
            <h3 className="login-form__title">Welcome back,</h3>
            <div className="login-form__input-div">
                <label htmlFor="email">EMAIL</label>
                <input className='login-form__input' type="email" name="email" id="email" />
            </div>      
    
            <div className="login-form__input-div"> 
                <label htmlFor="password">PASSWORD</label>
                <input className='login-form__input' type="password" name="password" id="password" />
            </div>      
            <button className="login-form__button">Login</button>
            <p className="login-form__text">Don't have an account? <a href="/register">Register</a></p>
            <p className="login-form__text">Forgot your password? <a href="/forgot-password">Reset</a></p>
        </form>  
        <div className="login-form__input-div">
           
        </div>
        </Paper>
        </div>
    );
}

export default Login;