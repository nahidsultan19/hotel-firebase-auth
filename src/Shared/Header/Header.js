import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            {/* <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/rooms'>Rooms</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <p><span>{user?.displayName && user.displayName}</span></p>
                        {user?.uid ? <button onClick={logOut} className='btn btn-link text-decoration-none text-muted'>Logout</button> :
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar> */}

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Brand Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to='/rooms'>Rooms</Nav.Link>
                            <Nav.Link href='/#services'>Services</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user?.uid ? <button onClick={logOut} className='btn btn-link text-decoration-none text-white'>Logout</button> :
                                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            }
                            <p><span className='text-white'>{user?.displayName && user.displayName}</span></p>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;