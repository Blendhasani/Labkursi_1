import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="info" expand="lg">
                <NavLink className="navbar-brand" to="/">
                    Enflix
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/dashboard">
                    Admin
                </NavLink>
                </Nav>
            
                </Navbar.Collapse>
            </Navbar>
        )
    }
}