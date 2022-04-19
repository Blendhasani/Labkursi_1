import React,{Component} from "react";
import {Card} from 'react-bootstrap';


export class DetajetEAktoritTeFilmit extends Component{
    

    render(){
        return(
            <div className="container">
                
                <Card className="mt-4 d-flex flex-row" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Emri I Aktorit te Filmit</Card.Title>
                      <Card.Subtitle>Enes</Card.Subtitle>
                  </Card.Body>

                  <Card.Body>
                    <Card.Title className="mb-4">Mbiemri I Aktorit te Filmit</Card.Title>
                      <Card.Subtitle>Hetemi</Card.Subtitle>
                  </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '70rem' }}>
                  <Card.Body>
                    <Card.Title className="mb-4">Biografia I Aktorit te Filmit</Card.Title>
                    <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
        )
    }
}