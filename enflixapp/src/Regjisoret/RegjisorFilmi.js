

import React,{Component} from "react";
import {Helmet} from "react-helmet";
import { Dropdown ,Button , ButtonToolbar } from "react-bootstrap";
import {Link, NavLink } from "react-router-dom";
import {Card} from 'react-bootstrap';

export class RegjisorFilmi extends Component{


constructor(props){
    super(props)
    this.state={regs:[]}
}

refreshList(){
    fetch(process.env.REACT_APP_API+'regjisoretefilmit')
    .then(response=>response.json())
    .then(data=>{
        this.setState({regs:data});
    });
}
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const{regs}=this.state;
        return(
            <div className="container shadow p-3 mb-5 bg-white rounded mt-4">
                <Helmet>
                    <title>Regjisoret E Filmit</title>
                </Helmet>
                <Dropdown className="d-flex justify-content-end mt-4">
                <Dropdown.Toggle variant="success">
                    Regjisoret E Filmit
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <NavLink className="nav-link d-inline p-1 text-black" to="/regjisorseriali">
                    Regjisoret E Serialit
                    </NavLink>
                </Dropdown.Menu>
                </Dropdown>
                <div className="container d-flex flex-wrap">
                    {regs.map(r=>
                        <Link key={r.RegjisoriFID} className="nav-link d-inline" to={`/detajeteregjisorevetefilmit/${r.RegjisoriFID}`}>
                        <Card className="mt-4" border="primary" style={{width:'17rem',height:'10rem'}}>
                        <Card.Body>
                            <Card.Title className="text-secondary d-flex justify-content-center"><span className="text-dark">Emri : </span>{r.Emri}</Card.Title>
                            <Card.Title className="text-secondary d-flex justify-content-center"><span className="text-dark">Mbiemri : </span>{r.Mbiemri}</Card.Title>
                            <ButtonToolbar  className="d-flex justify-content-center" >
                                <Button variant="success">
                                Me shume
                                </Button>
                                 
                            </ButtonToolbar>
                        </Card.Body>
                        </Card>
                        </Link>
                        )}
                </div>
            </div>
        )
    }
}