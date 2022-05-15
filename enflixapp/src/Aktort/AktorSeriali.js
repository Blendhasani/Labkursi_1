import React,{Component} from "react";
import {Link, NavLink} from 'react-router-dom';
import {Dropdown, Button, ButtonToolbar} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Card} from 'react-bootstrap';

export class AktorSeriali extends Component{
    constructor(props){
        super(props)
        this.state={akto:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'aktorteserialit')
        .then(response=>response.json())
        .then(data=>{
            this.setState({akto:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    
    render(){
        const {akto}=this.state;
        return(
            <div className="container">
                <Helmet>
                <title>Aktort E Serialit</title>
                </Helmet>
                <Dropdown className="d-flex justify-content-end mt-4">
                  <Dropdown.Toggle variant="success">
                    Aktort E Serialit
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavLink className="nav-link d-inline p-1 text-black" to="aktorfilmi">
                      Aktort E Filmit
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="container d-flex flex-wrap">
                {akto.map(akt=>
                <Link key={akt.AktortSId} className="nav-link d-inline" to={`/detajeteaktoritteserialit/${akt.AktortSId}`}>
                <Card className="mt-4" border="primary" style={{ width: '17rem', height: '10rem' }}>
                  <Card.Body>
                    <Card.Title className="text-secondary d-flex justify-content-center"><span className="text-dark">Emri: </span> {akt.Emri}</Card.Title>
                    <Card.Title className="text-secondary d-flex justify-content-center"><span className="text-dark">Mbiemri: </span> {akt.Mbiemri}</Card.Title>
                    <ButtonToolbar className="d-flex justify-content-center">
                    <Button variant="success">
                       Me Shume
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