import './Login.scss' 
import Paper from '@mui/material/Paper';

const Login = () => {
    return (
        <div className="login-page">
        <Paper className="login-component" elevation={3}>
        <form className="login-form">
            <h3 className="login-form__title">Login</h3>
            <div className="login-form__input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>      
    
            <div className="login-form__input"> 
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>      
            <button className="login-form__button">Login</button>
        </form>  
        </Paper>
        </div>
    );
}

export default Login;