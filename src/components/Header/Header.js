
import { getAuth, signOut } from '@firebase/auth';
import './Header.css'
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const Header = () => {
    const { user, logOut, isLogin } = useAuth();

    return (
        <div>
            <Navbar bg="light" className="navmenu" expand="lg" >
                <Container>

                    <Nav.Link as={Link} to="/home"><img src={logo} alt="" /></Nav.Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#f16539' }} as={Link} className="menu-item" to="/home">Home</NavLink>
                        <NavLink className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#f16539' }} as={Link} className="menu-item" to="/doctors">Doctors</NavLink>
                        <NavLink className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#f16539' }} as={Link} className="menu-item" to="/about">About</NavLink>
                        <NavLink className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#f16539' }} as={Link} className="menu-item" to="/blog">Blog</NavLink>
                        <NavLink className="Nav_link"
                            activeClassName="activeRoute"
                            activeStyle={{ color: '#f16539' }} as={Link} className="menu-item" to="/contact">Contact</NavLink>

                        {user?.email ? <button onClick={logOut} variant="warning" size="sm" className="mx-3 btn-logout">Logout</button>
                            :
                            <NavLink as={Link} to="/login"><button className="mx-3 btn-login ">Login</button></NavLink>}
                        <Navbar.Text>
                            {user?.email && `Signed in as:`} <a href="#login" className="user-name">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;