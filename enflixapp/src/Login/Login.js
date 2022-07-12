
import React,{Component} from "react";
import {Helmet} from "react-helmet";
import {Button,Form,ButtonToolbar} from 'react-bootstrap';
import jwt from 'jwt-decode'

export class Login extends Component{


    constructor(){
        super();
        this.state={
            Username:null,
            Password:null,
            token:false,
            store:null
        }
    }


    login(){
        fetch('http://localhost:5093/api/account/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true             
            },
            body:JSON.stringify(this.state)
        }).then(response => response.text())
        .then(result => {
          if (result != ""){
            console.log((jwt.result));
            localStorage.setItem("token", result);
            localStorage.setItem("role", jwt(result).GetMyRole);
            {window.location.href="/serialet"}
          } else{
            alert('Incorrect email or password!');;
          }
  
        })
        .catch(error => {
          console.log(error);
          
        });
    }

   
    render(){

        return(
            <div>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
               {  
                !this.state.login?
                <div>
                    
                <input type="text"   onChange={(event)=>{this.setState({Username:event.target.value})}}/>
               
               <input type="password"   onChange={(event)=>{this.setState({Password:event.target.value})}}/>
              
               <button onClick={()=>{this.login()}}>Log in</button>
                </div>
                :<div>
                
                </div>
               
         
               }
                </div>
        )
    }

}