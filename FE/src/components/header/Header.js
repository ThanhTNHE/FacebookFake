import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const {auth,setAuth} =useAuth();

    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
    }

    function logOut(){
      setAuth(null);
      handleNav("/");
    }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="menu-link" style={{"color":'white'}}>
            <Link to = "/">
                <FontAwesomeIcon icon={faGraduationCap}/>
             </Link>          
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
      
        {
          auth?.user?
            <Button variant = "info" className="mb-2 mt-2" onClick ={logOut}>Logout</Button>
          :
          <>
            <Button variant='info' className='me-2' onClick={() => handleNav("/Login")}>Login</Button>
            <Button variant='info' className='me-2' onClick={() => handleNav("/Register")} >Register</Button>
          </>
        }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
