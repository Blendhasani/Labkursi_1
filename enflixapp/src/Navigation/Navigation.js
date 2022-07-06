import React,{Component} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';

export class Navigation extends Component{
 
    //  logout() {
    //     localStorage.clear();
    //     history.push('/login')
    // }
    render(){
        //let user=JSON.parse(localStorage.getItem('user-info'))
        // const history = useHistory();
        //console.warn(user)
        return(
            <Navbar bg="info" expand="lg">
                <NavLink className="navbar-brand" to="/">
                   <b>&nbsp;Enflix</b> 
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/">
                    Filmat
                </NavLink>
                </Nav>

                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/Serialet">
                    Serialet
                </NavLink>
                </Nav>
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/aktorfilmi">
                    Aktort
                </NavLink>
                </Nav>
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/regjisorfilmi">
                    Regjisoret
                </NavLink>
                </Nav>
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/producentfilmi">
                    Producentet
                </NavLink>
                </Nav>
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/rrethneshh">
                    Rreth Nesh
                </NavLink>
                </Nav>
                <Nav>
                <NavLink className="nav-link d-inline p-1 text-light" to="/dashboard">
                    Dashboard
                </NavLink>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="right">
                <Nav  className="right">
                <NavLink className="nav-link d-inline p-1 text-light mr-5" to="/login">
                    <strong>Login&nbsp;</strong>
                </NavLink>
                </Nav>
                <Nav className="right">
                <NavLink className="nav-link d-inline p-1 text-light" to="/registers">
                <strong>Register&nbsp;</strong>
                </NavLink>
                </Nav>
                </Navbar.Collapse>
                

                {/* <Nav>
                    <NavDropdown title="User Name">
                        <NavDropdown.Item >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav> */}
            
              
            </Navbar>
        )
    }
}