import React,{Component} from "react";
import {Table,Dropdown} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddEpisoden } from "./AddEpisoden";


export class Episoda extends Component{

      constructor(props){
          super(props)
          this.state={episod:[],addModalShow:false}
      }

   refreshList(){
        fetch(process.env.REACT_APP_API+'episoda')
        .then(response=>response.json())
        .then(data=>{
            this.setState({episod:data});
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
        const{episod,epid}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
        <div className="container">
             <Helmet>
                <title>Episoda</title>
            </Helmet>
            <Dropdown className="d-flex justify-content-end mt-4">
                    <Dropdown.Toggle variant="success">
                        Episodat
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                      
                        <Dropdown.Item href="seriali">Seriali</Dropdown.Item>
                        <Dropdown.Item href="sezona">Sezonat</Dropdown.Item>
                        <Dropdown.Item href="sezonaepisodi">Lidhjet Sezone Episod</Dropdown.Item>
                    </Dropdown.Menu>
         
                </Dropdown>
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
                {episod.map(e=>
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
        )
    }

}