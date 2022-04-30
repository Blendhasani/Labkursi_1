import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditKategoriteESerialit extends Component{

    constructor(props){
        super(props);
        this.submitKategoriteS=this.submitKategoriteS.bind();

    }

    submitKategoriteS(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'kategoriteeserialit',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                KategoriaSID:event.target.KategoriaSID.value,
                Kategoria:event.target.Kategoria.value,

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
                            Update Kategorine e Serialit
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.submitKategoriteS}>
                                <Form.Group controlId="KategoriaSID">
                                        <Form.Control type="text" name="KategoriaSID" required hidden defaultValue={this.props.katID} placeholder="KategoriaSID" />
                                    </Form.Group>
                                    <Form.Group controlId="Kategoria">
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Control type="text" name="Kategoria" required defaultValue={this.props.kategoria} placeholder="Kategoria" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Kategorine
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