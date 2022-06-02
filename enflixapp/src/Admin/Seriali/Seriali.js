import React,{Component} from "react";
import {Table} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddEpisoden } from "../Episoda/AddEpisoden";
import { AddSezonen } from "../Sezona/AddSezonen";


export class Seriali extends Component{
    constructor(props){
        super(props)
        this.state={serie:[],sezo:[],addModalShow:false, addModal:false}
    }

    refreshList2(){
        fetch(process.env.REACT_APP_API+'sezona')
        .then(response=>response.json())
        .then(data=>{
            this.setState({sezo:data});
        });
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
        this.refreshList2();
    }

    componentDidUpdate(){
        this.refreshList();
        this.refreshList2();
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
    deleteSz(szid){
        if(window.confirm('Jeni te sigurt qe doni te fshini Sezonen e Serialit?')){
            fetch(process.env.REACT_APP_API+'sezona/'+szid,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }
render(){
  
    const{serie,sezo,epid,szid}=this.state;
    let addModalClose=()=>this.setState({addModalShow:false});
    let addModalC=()=>this.setState({addModal:false});
    return(

        <div className="container">
            <Helmet>
                <title>Serialet</title>
            </Helmet>
            <ButtonToolbar>
                <Button className="mt-4" variant="primary">Shto Serialin</Button>
            </ButtonToolbar>
            
        <div className="container">
   
        <ButtonToolbar>
        <Button className="mt-4" variant="success" onClick={()=>this.setState({addModal:true})}>
            Shto Sezonen
        <AddSezonen show={this.state.addModal} 
        onHide={addModalC}/>
        </Button>
        </ButtonToolbar>



        <Table className="mt-4"  striped bordered hover size="sm">
            <thead>
            <tr>
                        <th>ID</th>
                        <th>Numri i sezones</th>
                        <th>Numri i episodave</th>
                        <th>Veprime</th>
                        </tr>
            </thead>
            <tbody>
                {sezo.map(s=>
                    <tr key={s.SezonaID}>
                        <td>{s.SezonaID}</td>
                        <td>{s.NrSezones}</td>
                        <td>{s.NrEpisodave}</td>
                        <td>
                        <ButtonToolbar>
                                   <Button className="mr-2" variant="info">
                                       Edit
                                   </Button>

                                   <Button className="mr-2" variant="danger" onClick={()=>this.deleteSz(s.SezonaID)}>
                                       Delete
                                   </Button>
                        </ButtonToolbar>
                         </td>
                    </tr>)}
            </tbody>
        </Table>




            
         </div>
         <div className="container">
         
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
                        <th>Veprime</th>
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