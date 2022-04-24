import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddProducentetEFilmit extends Component{

    constructor(props){
        super(props);
        this.submitProducentF=this.submitProducentF.bind(this);
    }

    submitProducentF(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'producentetefilmit',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Biografia:event.target.Biografia.value

            })
        })

        .then(res=>res.json())
        .then((result)=>{
        
            alert(result);
        },
        (error)=>{
            alert('Ka ndodhur nje gabim');
        })
    }

    render(){
        return (
            <div className="container">
                             <Modal {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shto Producentin e Filmit
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.submitProducentF}>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required placeholder="Emri" />
                                    </Form.Group>
                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required placeholder="Mbiemri" />
                                    </Form.Group>
                                    <Form.Group controlId="Biografia">
                                        <Form.Label>Biografia</Form.Label>
                                        <Form.Control as="textarea" name="Biografia" required placeholder="Biografia" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Shto Producentin
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
