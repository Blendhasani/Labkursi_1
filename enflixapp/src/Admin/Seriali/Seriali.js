import React,{Component} from "react";
import {Table,Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';



export class Seriali extends Component{
    constructor(props){
        super(props)
        
    }

 
    
 
  
  
 

render(){
  
    

    return(

        <div className="container">
            <Helmet>
                <title>Serialet</title>
            </Helmet>
            
            <Dropdown className="d-flex justify-content-end mt-4">
                    <Dropdown.Toggle variant="success">
                        Serialet
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                      
                        <Dropdown.Item href="sezona">Sezonat</Dropdown.Item>
                        <Dropdown.Item href="episoda">Episodat</Dropdown.Item>
                    </Dropdown.Menu>
         
                </Dropdown>
                <ButtonToolbar>
                <Button className="mt-4" variant="primary">Shto Serialin</Button>
            </ButtonToolbar>

        


        </div>

       
    )




}











}