import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export class Serialet extends Component {
  constructor(props) {
    super(props);
    this.state = { seri: [], sert: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Seriali")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ seri: data });
      });
  }

  refreshList1(){
    fetch(process.env.REACT_APP_API+'kategoriteeserialit')
    .then(response=>response.json())
    .then(data=>{
        this.setState({sert:data});
    });
  }

  componentDidMount() {
    this.refreshList();
    this.refreshList1();
  }

  componentDidUpdate() {
    this.refreshList();
    this.refreshList1();
  }

  render() {
    const { seri, sert } = this.state;

    return (
      <div>
        <Helmet>
          <title>Serialet</title>
        </Helmet>
        <Accordion className="container mt-4 w-50">
                   <Accordion.Item eventKey="0">
                     <Accordion.Header>Zgjedh Kategorine</Accordion.Header>
                     {sert.map(serr=>
                       <Accordion.Body key={serr.KategoriaSID}>
                        <Link className="nav-link d-inline" to={`/kategoritserialit/${serr.KategoriaSID}`}>
                           {serr.Kategoria}
                        </Link>
                       </Accordion.Body>
                       )}
                     </Accordion.Item>
                   </Accordion>
        <div className="container d-flex mt-4 flex-wrap">
          {seri.map((ser) => (
            <Link
              key={ser.SerialiID}
              className="nav-link d-inline"
              to={`/detajetesezones/${ser.SerialiID}`}
            >
              <Card style={{ width: "17rem" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "271px", height: "325px" }}
                  src={`${process.env.REACT_APP_PHOTOPATHS}${ser.Foto_S}`}
                />
                <Card.Body>
                  <Card.Title className="mb-4 d-flex justify-content-center">
                    {ser.Titulli}
                  </Card.Title>
                  <Card.Text className="mb-4 d-flex justify-content-center">
                    Kategoria: {ser.Kategoria}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
