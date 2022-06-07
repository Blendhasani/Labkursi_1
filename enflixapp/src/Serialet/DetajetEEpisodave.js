import React,{Component} from "react";
import {Card, Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export class DetajetEEpisodave extends Component{
    
  constructor(props){
    super(props)
    this.state={seri:[]}
}

refreshList(){
  let {sezid} = this.props.match.params;
  fetch(process.env.REACT_APP_API+`seriali/${sezid}/episodat`, {
    method: 'GET'
  })
    .then(response=>response.json())
    .then(data=>{
        this.setState({seri:data});
    });
}
componentDidMount(){
    this.refreshList();
}

componentDidUpdate(){
    this.refreshList();
}


    render(){
      const {seri}=this.state;
        return(
            <div className="container">
                <Helmet>
                <title>Detajet e Episodave se Serialit</title>
                </Helmet>
               
                <div className="container d-flex flex-wrap">
                {seri.map(ser=>
                 <Link key={ser.SerialiID} className="nav-link d-inline" to={`/detajeteepisodes/${ser.EpisodaID}`}>
                <Card className="mt-4 d-flex flex-column" style={{ width: '70rem' }} key={ser.SerialiID}>
               
               
                  <Card.Body>
                    <Card.Title className="mb-4">Numri episodes : </Card.Title>
                      <Card.Subtitle>{ser.NrEpisodes}</Card.Subtitle>
                  </Card.Body>
                  <Card.Body>
                  <Card.Title className="mb-4">Titulli : </Card.Title>
                      <Card.Subtitle>{ser.Titulli}</Card.Subtitle>
                  </Card.Body>
                  
                  <Card.Body>
                      <Button variant="primary">Luaj</Button>
                 </Card.Body>
                </Card>
                
                </Link>
                )}
                </div>
            </div>
        )
    }
}