import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';


export class EditAktortEFilmit extends Component{
    constructor(props){
        super(props);
        this.submitAktortF=this.submitAktortF.bind(this);
    }

    submitAktortF(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'aktortefilmit',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                AktortiFId:event.target.AktortiFId.value,
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
        {window.location.href="/aktortefilmit"}
    }
    render(){
        return(
            <div className="container">
                <Modal {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Aktorin e Filmit
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.submitAktortF}>
                                <Form.Group controlId="AktortiFId">
                                        <Form.Control type="text" name="AktortiFId" required hidden defaultValue={this.props.aktid} placeholder="AktortiFId" />
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required defaultValue={this.props.emri} placeholder="Emri" />
                                    </Form.Group>
                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required defaultValue={this.props.mbi} placeholder="Mbiemri" />
                                    </Form.Group>
                                    <Form.Group controlId="Biografia">
                                        <Form.Label>Biografia</Form.Label>
                                        <Form.Control as="textarea" name="Biografia" required defaultValue={this.props.bio} placeholder="Biografia" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Aktorin
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