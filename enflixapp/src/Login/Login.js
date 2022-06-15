
import React,{Component} from "react";
import {Helmet} from "react-helmet";
import {Button,Form,ButtonToolbar} from 'react-bootstrap';
export class Login extends Component{

    constructor(props){
        super(props)
        this.submitPerdoruesi=this.submitPerdoruesi.bind(this)
        this.state={seri:[]}
    }
  


    refreshList(){
        fetch(process.env.REACT_APP_API+'seriali')
        .then(response=>response.json())
        .then(data=>{
            this.setState({seri:data});
        });
    }

    submitPerdoruesi(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'account/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                
                Username:event.target.Username.value,
                Password:event.target.Password.value

            })
        })

        .then(res=>res.json())
        .then((result)=>{
        
            alert(result);
        },
        (error)=>{
            alert('Ka ndodhur nje gabim');
        })
  
        {window.location.href="/"} 
        
    }

render(){


    return(
        <div className="container d-flex justify-content-center mt-5 mb-5">
            <Helmet>Login</Helmet>


            <Form onSubmit={this.submitPerdoruesi}>
  <Form.Group  className="mb-3 " controlId="Username">
    <Form.Label>Username</Form.Label>
    <Form.Control className="d-flex justify-content-center" style={{width: '17rem'}} type="text" name="Username" placeholder="Enter username" />
  </Form.Group>

  <Form.Group  className="mb-3" controlId="Password">
    <Form.Label>Password</Form.Label>
    <Form.Control className="d-flex justify-content-center" style={{width: '17rem'}} type="password" name="Password" placeholder="Password" />
  </Form.Group >

  <ButtonToolbar className="d-flex justify-content-center">
  <Button variant="primary" type="submit">
    Log in
  </Button>
  </ButtonToolbar>
  
</Form>


        </div>



    )


}

}