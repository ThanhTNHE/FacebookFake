import React, {useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {Link} from "react-router-dom";
import './Home.css'
import Spinner from '../spinner/Spinner';

const home = () => {

  const {auth,setAuth} = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate();


  
  return (
    <>
    <Spinner loadSpinner={isLoading}/>
    <main className = "container">

      <h1>Welcome to home page</h1>
      
    </main>
    </>
  )
}

export default home
