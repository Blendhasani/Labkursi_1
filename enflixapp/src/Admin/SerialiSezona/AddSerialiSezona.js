import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';




export class AddSerialiSezona extends Component{

    constructor(props){
        super(props);
        this.submitSS=this.submitSS.bind(this);
    }



    validationSchema() {
        return Yup.object().shape({
            SerialiID: Yup.number()
            .required('SerialiID duhet te plotesohet'),
            SezonaID: Yup.number()
            .required('SezonaID duhet te plotesohet'),
        
        });
      
    }

    submitSS(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'serialisezona',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                
                SerialiID:event.target.SerialiID.value,
                SezonaID:event.target.SezonaID.value
               
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Ka ndodhur nje gabim');
        })
        {window.location.href="/SerialiSezona"}
    }
    
render(){
    const initialValues={
        SerialiID : '',
        SezonaID : '',
        

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
                         onSubmit={this.submitSS}
                       >
                           {({ submitSS, isValid, isSubmitting, dirty }) => (
                               <Form onSubmit={this.submitSS}>
                                   <Form.Group controlId="SerialiID">
                                  <Form.Label>SerialiID</Form.Label>
                                  <Field min="1" type="number" name="SerialiID" required placeholder="SerialiID" className="form-control" />
                                  <ErrorMessage
                                    name="SerialiID"
                                    component="div"
                                    className="text-danger"
                                   />
                                   </Form.Group>
                                   
                                   <Form.Group controlId="SezonaID">
                                   <Form.Label>SezonaID</Form.Label>
                                   <Field min="1" type="number" name="SezonaID" required placeholder="SezonaID" className="form-control" />
                                   <ErrorMessage
                                    name="SezonaID"
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