import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import RequiredAuth from './components/RequiredAuth';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Register" element={<Register/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route element ={<RequiredAuth/>}>

              </Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
