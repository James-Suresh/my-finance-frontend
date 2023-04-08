
import logo from './logo.svg';
import './App.scss';
import Login from './Pages/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import News from './Pages/News/News';
import Header from './Components/Header/Header';
function App() {
  return (
  <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    <BrowserRouter>
    <Header>
      
    </Header>
    <Routes>
      
      <Route path='/login' element ={<Login/>}/>
      <Route path='/news' element = {<News/>}/>
      <Route path='/' element = {<News/>}/>
    </Routes>
    
    </BrowserRouter>
  </div>
    
  );
}

export default App;
