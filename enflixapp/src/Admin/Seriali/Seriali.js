import React,{Component} from "react";
import {Table} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddEpisoden } from "../Episoda/AddEpisoden";


export class Seriali extends Component{
    constructor(props){
        super(props)
        this.state={serie:[],addModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'episoda')
        .then(response=>response.json())
        .then(data=>{
            this.setState({serie:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteEp(epid){
        if(window.confirm('Jeni te sigurt qe doni te fshini Episoden e Serialit?')){
            fetch(process.env.REACT_APP_API+'episoda/'+epid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }
render(){
  
    const{serie,epid}=this.state;
    let addModalClose=()=>this.setState({addModalClose:false});
    return(

        <div className="container">
            <Helmet>
                <title>Serialet</title>
            </Helmet>
            <ButtonToolbar>
                <Button className="mt-4" variant="primary">Shto Serialin</Button>
            </ButtonToolbar>
        <div className="container">
        <Helmet>
                <title>Sezonat</title>
        </Helmet>
            <ButtonToolbar>
                <Button className="mt-4" variant="success">Shto Sezonen</Button>
            </ButtonToolbar>
            
         </div>
         <div className="container">
         <Helmet>
                <title>Episodat</title>
        </Helmet>
        <ButtonToolbar>
        <Button className="mt-4" variant="success" onClick={()=>this.setState({addModalShow:true})}>
            Shto Episodin
        <AddEpisoden show={this.state.addModalShow} 
        onHide={addModalClose}/>
        </Button>
        </ButtonToolbar>
        <Table className="mt-4"  striped bordered hover size="sm">
            <thead>
            <tr>
                        <th>ID</th>
                        <th>Titulli</th>
                        <th>Numri Episodes</th>
                        <th>Pershkrimi</th>
                        <th>Linku</th>
                        </tr>
            </thead>
            <tbody>
                {serie.map(e=>
                    <tr key={e.EpisodaID}>
                        <td>{e.EpisodaID}</td>
                        <td>{e.Titulli}</td>
                        <td>{e.NrEpisodes}</td>
                        <td>{e.PershkrimiE}</td>
                        <td>{e.Linku}</td>
                        <td>
                        <ButtonToolbar>
                                   <Button className="mr-2" variant="info">
                                       Edit
                                   </Button>

                                   <Button className="mr-2" variant="danger" onClick={()=>this.deleteEp(e.EpisodaID)}>
                                       Delete
                                   </Button>
                        </ButtonToolbar>
                         </td>
                    </tr>)}
            </tbody>
        </Table>

        </div>


        </div>

       
    )




}











}