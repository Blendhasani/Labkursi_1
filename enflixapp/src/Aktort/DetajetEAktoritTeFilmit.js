import React,{Component} from "react";
import {Card} from 'react-bootstrap';
import {Helmet} from "react-helmet";


export class DetajetEAktoritTeFilmit extends Component{
    
  constructor(props){
    super(props)
    this.state={akto:[]}
}

refreshList(){
  let {id} = this.props.match.params;
  fetch(process.env.REACT_APP_API+`aktortefilmit/${id}`, {
    method: 'GET'
  })
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
                <title>Detajet e Aktorit Te Filmit</title>
                </Helmet>
                <div className="container d-flex flex-wrap">
                {akto.map(akt=><Card className="mt-4" key={akt.AktortiFId}>
                  <Card className="mt-4 d-flex flex-row" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Emri I Aktorit te Filmit</Card.Title>
                      <Card.Subtitle>{akt.Emri}</Card.Subtitle>
                  </Card.Body>

                  <Card.Body>
                    <Card.Title className="mb-4">Mbiemri I Aktorit te Filmit</Card.Title>
                      <Card.Subtitle>{akt.Mbiemri}</Card.Subtitle>
                  </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Biografia I Aktorit te Filmit</Card.Title>
                    <Card.Text>
                    {akt.Biografia}
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Card>
                )}
                </div>
            </div>
        )
    }
}