import React,{Component} from "react";
import {Helmet} from "react-helmet";

export class RrethNeshsh extends Component{
    constructor(props){
        super(props)
        this.state={rrethn:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'rrethnesh')
        .then(response=>response.json())
        .then(data=>{
            this.setState({rrethn:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    
    render(){
        const {rrethn}=this.state;
        return(
            <div className="container mt-4">
                <Helmet>
                <title>Rreth Nesh</title>
                </Helmet>
                {rrethn.map(rre=>
                <div key={rre.TitulliId} className="container shadow p-3 mb-5 bg-white rounded mt-4">
                <strong>
                    {rre.Titulli}
                </strong>
                <p className="mt-4">{rre.Teksti}</p>
                </div>
                )}
            </div>
        )
    }
}