import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/userSlice/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Navbarr() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Navbar bg="white" data-bs-theme="white" className='thenav'>
    <Container>
      <Navbar.Brand href="#home"><img href="/.png" style={{width:"200px" , height:"45px"}}></img></Navbar.Brand>
      <Nav className="me-auto">
     <Nav.Link href="#home"><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></Nav.Link>
        <Nav.Link href="#features"><Link to="/shop" style={{textDecoration:"none", color:"black"}}>Shop</Link></Nav.Link>
        <Nav.Link href="#pricing"><Link to="/contact" style={{textDecoration:"none", color:"black"}}>Contact</Link></Nav.Link>
        <Nav.Link href=""><Link to="/about" style={{textDecoration:"none", color:"black"}}>About</Link></Nav.Link>
       { !user?<Nav.Link href="#pricing"><Link to="/login" style={{textDecoration:"none", color:"black"}}>Login</Link></Nav.Link> 
       :<div style={{display:"flex"}}>
        <Nav.Link href=""><Link to="/profil" style={{textDecoration:"none", color:"black"}}>Profil</Link></Nav.Link>
        <Nav.Link href=""><Link to="/pannier" style={{textDecoration:"none", color:"black"}}>Pannier</Link></Nav.Link>
      
        <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button></div>}
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbarr