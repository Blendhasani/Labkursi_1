import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Card} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

export class KategoritFilmit extends Component{
    constructor(props){
        super(props)
        this.state={katf:[], filmn:[]}
    }

    refreshList(){
        let {id} = this.props.match.params;
        fetch(process.env.REACT_APP_API+`filmat/kategoria/${id}`, {
          method: 'GET'
        })
          .then(response=>response.json())
          .then(data=>{
              this.setState({katf:data});
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
        const {katf, filmn}=this.state;
        return(
            <div className="container">
                <Helmet>
                <title>Filmat</title>
                </Helmet>
                
                <Accordion className="container mt-4 w-50">
                   <Accordion.Item eventKey="0">
                     <Accordion.Header>Zgjedh Kategorin</Accordion.Header>
                       <Accordion.Body>
                        <Link className="nav-link" to={`/`}>
                           Filmat
                        </Link>
                        {filmn.map(filmm=>
                        <Link key={filmm.KategoriaFId} className="nav-link" to={`/kategoritfilmit/${filmm.KategoriaFId}`}>
                           {filmm.Kategoria}
                        </Link>
                        )}
                       </Accordion.Body>
                     </Accordion.Item>
                   </Accordion>
                
                <div className="container d-flex mt-4 flex-wrap">
                {katf.map(kat=>
                <Link key={kat.FilmatId} className="nav-link d-inline" to={`/detajetefilmit/${kat.FilmatId}`}>
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" style={{width: '271px', height: '300px'}} src={`${process.env.REACT_APP_PHOTOPATH}${kat.Foto}`} />
                      <Card.Body>
                        <Card.Title>{kat.Titulli}</Card.Title>
                        <Card.Text>
                         Kategoria: {kat.Kategoria}
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