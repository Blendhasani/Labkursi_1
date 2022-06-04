import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';



export class AddSezonaEpisodi extends Component{

    constructor(props){
        super(props);
        this.submitSE=this.submitSE.bind(this);
    }


    validationSchema() {
        return Yup.object().shape({
            SezonaID: Yup.number()
            .required('SezonaID duhet te plotesohet'),
            EpisodaID: Yup.number()
            .required('EpisodaID duhet te plotesohet'),
        
        });
      
    }
        submitSE(event){
            event.preventDefault();
            fetch(process.env.REACT_APP_API+'sezonaepisodi',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
    
                body:JSON.stringify({
                    
                    SezonaID:event.target.SezonaID.value,
                    EpisodaID:event.target.EpisodaID.value
                   
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
            },
            (error)=>{
                alert('Ka ndodhur nje gabim');
            })
            {window.location.href="/SezonaEpisodi"}
        }
        render(){
            const initialValues={
                SezonaID : '',
                EpisodaID : '',
                
      
            };



      return(
          <div className="container">
              <Modal {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shto Lidhjen
                        </Modal.Title>
                    </Modal.Header>

                        <Modal.Body>
                            <Row>
                            <Col sm={6}>
                            <Formik
                               initialValues={initialValues}
                               validationSchema={this.validationSchema}
                               onSubmit={this.submitSE}
                             >
                                 {({ submitSE, isValid, isSubmitting, dirty }) => (
                                     <Form onSubmit={this.submitSE}>
                                         <Form.Group controlId="SezonaID">
                                        <Form.Label>SezonaID</Form.Label>
                                        <Field min="1" type="number" name="SezonaID" required placeholder="SezonaID" className="form-control" />
                                        <ErrorMessage
                                          name="SezonaID"
                                          component="div"
                                          className="text-danger"
                                         />
                                         </Form.Group>
                                         
                                         <Form.Group controlId="EpisodaID">
                                         <Form.Label>EpisodaID</Form.Label>
                                         <Field min="1" type="number" name="EpisodaID" required placeholder="EpisodaID" className="form-control" />
                                         <ErrorMessage
                                          name="EpisodaID"
                                          component="div"
                                          className="text-danger"
                                         />
                                         </Form.Group>

                                       
                                        
                                    <Form.Group>
                                        <Button disabled={isSubmitting || !dirty || !isValid} variant="primary" type="submit">
                                            Shto Lidhjen
                                        </Button>
                                    </Form.Group>
                                     </Form>
                                     )}
                                     </Formik>
                            </Col>
                            </Row>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger"  onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>

                    </Modal>
          </div>
      )
      


}
}

