import React,{Component} from "react";
import {Card, Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export class DetajetESezones extends Component{
    
  constructor(props){
    super(props)
    this.state={seri:[]}
}

refreshList(){
  let {seid} = this.props.match.params;
  fetch(process.env.REACT_APP_API+`seriali/${seid}`, {
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
                <title>Detajet e Sezones se Serialit</title>
                </Helmet>
               
                <Dropdown className="d-flex justify-content-end mt-4">
                    <Dropdown.Toggle variant="success">
                        Serialet
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                   
                    <Link  className="nav-link d-inline p-1 text-black" to={"/detajeteserialit"}>
                            Detajet E Serialit
                        </Link>
                      
                        
                    </Dropdown.Menu>
         
                </Dropdown>

    
 
                <div className="container d-flex flex-wrap">
                {seri.map(ser=>
                 <Link key={ser.SerialiID} className="nav-link d-inline" to={`/detajeteepisodave/${ser.SezonaID}`}>
                     
               
                
               
                  <Card className="mt-4 d-flex flex-column" key={ser.SerialiID}style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Sezona <strong> {ser.NrSezones}</strong></Card.Title>
                      
                      
                  </Card.Body>
                 

                
                </Card>
                </Link>
                )}
                </div>
            </div>
            
        )
    }
}