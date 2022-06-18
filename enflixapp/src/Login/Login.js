
import React,{Component} from "react";
import {Helmet} from "react-helmet";
import {Button,Form,ButtonToolbar} from 'react-bootstrap';

export class Login extends Component{


    constructor(){
        super();
        this.state={
            Username:null,
            Password:null,
            login:false,
            store:null
        }
    }


    login(){
        fetch('http://localhost:5093/api/Account/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true             
            },
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
               console.warn("result",result); 
               localStorage.setItem('login',JSON.stringify({
                login:true,
                token:result.token
               }))

               this.setState({login:true})
               {window.location.href="/serialet"}
            })
        })
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