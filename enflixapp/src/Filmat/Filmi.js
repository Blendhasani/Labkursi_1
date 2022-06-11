import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

export class Filmi extends Component{
    constructor(props){
        super(props)
        this.state={film:[], filmn:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Filmat')
        .then(response=>response.json())
        .then(data=>{
            this.setState({film:data});
        });
    }

    refreshList1(){
        fetch(process.env.REACT_APP_API+'kategoritefilmit')
        .then(response=>response.json())
        .then(data=>{
            this.setState({filmn:data});
        });
    }

    componentDidMount(){
        this.refreshList();
        this.refreshList1();
    }

    componentDidUpdate(){
        this.refreshList();
        this.refreshList1();
    }
    
    render(){
        const {film, filmn}=this.state;
        return(
            <div className="container">
                <Helmet>
                <title>Filmat</title>
                </Helmet>
                
                <Accordion className="container mt-4 w-50">
                   <Accordion.Item eventKey="0">
                     <Accordion.Header>Zgjedh Kategorin</Accordion.Header>
                     {filmn.map(filmm=>
                       <Accordion.Body key={filmm.KategoriaFId}>
                        <Link className="nav-link d-inline" to={`/kategoritfilmit/${filmm.KategoriaFId}`}>
                           {filmm.Kategoria}
                        </Link>
                       </Accordion.Body>
                       )}
                     </Accordion.Item>
                   </Accordion>
                
                <div className="container d-flex mt-4 flex-wrap">
                {film.map(fil=>
                <Link key={fil.FilmatId} className="nav-link d-inline" to={`/detajetefilmit/${fil.FilmatId}`}>
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" style={{width: '271px', height: '325px'}} src={`${process.env.REACT_APP_PHOTOPATH}${fil.Foto}`} />
                      <Card.Body>
                        <Card.Title>{fil.Titulli}</Card.Title>
                        <Card.Text>
                         Kategoria: {fil.Kategoria}
                        </Card.Text>
                      <Button variant="primary">Shiko me Shume</Button>
                    </Card.Body>
                  </Card>
                </Link>
                )}
                </div>
            </div>
        )
    }
}