import React,{Component} from "react";
import {Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export class Serialet extends Component{
    constructor(props){
        super(props)
        this.state={seri:[]}
    }


    refreshList(){
        fetch(process.env.REACT_APP_API+'Seriali')
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
      <div>
           <Helmet>
                <title>Serialet</title>
                </Helmet>
                <div className="container d-flex mt-4 flex-wrap">
                {seri.map(ser=>
                <Link key={ser.SerialiID} className="nav-link d-inline" to={`/detajetesezones/${ser.SerialiID}`}>
                  <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" style={{width: '271px', height: '300px'}} src={`${process.env.REACT_APP_PHOTOPATHS}${ser.Foto_S}`} />
                      <Card.Body>
                        <Card.Title>{ser.Titulli}</Card.Title>
                        <Card.Text>
                         Kategoria: {ser.Kategoria}
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