import React, { Component } from 'react';
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from 'axios';
import DomainGraph from "./domain-graph/DomainGraph";
import MicroServicesList from "./microservices-list/MicroServicesList";


class Specifications extends Component {
    state = {
        domains: []
    }

    componentDidMount() {
        this.refresh();
    }


    refresh() {
        axios.get('http://localhost:8080/domains')
            .then((response) => {
                console.log(response.data);
                this.setState({domains: response.data})
        });
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Domain graph
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><DomainGraph domains={ this.state.domains } refresh = { () => this.refresh() } /></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Event graph
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>TODO</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Microservices
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body><MicroServicesList /></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Specifications;