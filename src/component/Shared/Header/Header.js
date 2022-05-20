import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">URBAN FASHION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            {
              user&&<Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
            }
            {
              user&&<Nav.Link as={Link} to='/manageItem'>Manage Item</Nav.Link>
            }
            {
              user && <Nav.Link as={Link} to='/myItem'>My Item</Nav.Link>
            }
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            {
              user ?
                <button className='btn btn-primary' onClick={() => signOut(auth)}>Log out</button>
                :
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;