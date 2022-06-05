import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Card} from 'react-bootstrap';

export class Filmi extends Component{
    constructor(props){
        super(props)
        this.state={film:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Filmat')
        .then(response=>response.json())
        .then(data=>{
            this.setState({film:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    
    render(){
        const {film}=this.state;
        return(
            <div className="container">
                <Helmet>
                <title>Filmat</title>
                </Helmet>
                <div className="container d-flex mt-4 flex-wrap">
                {film.map(fil=>
                <Link key={fil.FilmatId} className="nav-link d-inline" to={`/detajetefilmit/${fil.FilmatId}`}>
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" style={{width: '271px', height: '300px'}} src={`${process.env.REACT_APP_PHOTOPATH}${fil.Foto}`} />
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