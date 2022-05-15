import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

export class AddKategoritEFilmit extends Component{
    constructor(props){
        super(props);
        this.submitKategoritF=this.submitKategoritF.bind(this);
    }

    validationSchema() {
        return Yup.object().shape({
          Kategoria: Yup.string()
            .required('Kategoria duhet te plotesohet.')
            .matches(
                /^[A-Za-z .]{3,15}$/,
                "Kategoria te permbaj vetem Shkronja dhe te jete me i gjate se 2 shkronja dhe jo me i gjate se 15 shkronja."
              ),
        });
      }

    submitKategoritF(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'kategoritefilmit',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
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
        {window.location.href="/kategoritefilmit"}
    }
    render(){
        const initialValues = {
            Kategoria: '',
          };
        return(
            <div className="container">
                <Modal {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shto Kategorin e filmit
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                            <Formik
                               initialValues={initialValues}
                               validationSchema={this.validationSchema}
                               onSubmit={this.submitKategoritF}
                             >
                                 {({ submitKategoritF, isValid, isSubmitting, dirty }) => (
                                <Form onSubmit={this.submitKategoritF}>
                                    <Form.Group controlId="Kategoria">
                                        <Form.Label>Kategoria</Form.Label>
                                        <Field type="text" name="Kategoria" required placeholder="Kategoria" className="form-control" />
                                        <ErrorMessage
                                          name="Kategoria"
                                          component="div"
                                          className="text-danger"
                                         />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button disabled={isSubmitting || !dirty || !isValid} variant="primary" type="submit">
                                            Shto Kategorin
                                        </Button>
                                    </Form.Group>
                                </Form>
                                )}
                            </Formik>
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