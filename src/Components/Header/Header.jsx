import { Link, useLocation } from "react-router-dom"
import './Header.scss'
import logo from '../../Assets/Images/myfinance-logo.png'
const Header = ({user, handleLoginState}) => {
    const location = useLocation();
    
    return (
        <div className="nav-background">
            <nav className="nav">
                <div className="nav__list-logo">
                       <Link to="/"><img className="nav__list-img"  src={logo} alt="my-finance-logo" /></Link>
                    </div>
                <ul className="nav__list">
                    
                    { !user&&
                    <li className={(location.pathname==="/login")?"nav__list-item nav__list-item--selected":"nav__list-item"}>
                        <Link to ="/login">Login</Link>
                    </li>
                    }
                    {user&&
                    <li className={"nav__list-item"} onClick={()=>handleLoginState(null)}>
                        Logout
                    </li>
                    }
                    {/* <li className="nav__list-item">
                        <Link to="/register">Register</Link>
                    </li> */}
                    <li className={(location.pathname==="/news")?"nav__list-item nav__list-item--selected":"nav__list-item"}>
                        <Link to="/news">News</Link>
            
                    </li>
                    <li className={(location.pathname==="/stocks")?"nav__list-item nav__list-item--selected":"nav__list-item"} >
            
                        <Link to="/stocks">Stocks</Link>
                    </li>
                    <div className="nav__div">
                    {user&&
                    <li className="nav__list-item">
                        <Link to="/profile">{user.username}</Link>
                    </li>
                    }
                    </div>
                 </ul>
            
            </nav>
        </div>
    );
}

export default Header;