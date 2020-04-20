import React, {useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Col, Row, Button, Alert } from 'react-bootstrap'
import Domain from '../entities/Domain'
import axios from 'axios'


export default function(props: any) {
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;

        setDisplayAlert(false);
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
          return;
        }

        const domain:Domain = {
            name : form.name.value,
            color : form.color.value,
            microServices : [],
            subDomains: []
        }

        axios.post('http://localhost:8080/domains', domain)
            .then(() => {
                console.log('domain créé !')
                props.refresh();
                props.onClose();
            })
            .catch((error) => {
                setDisplayAlert(true);
                console.log(error);
            });

        //setValidated(true);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Alert variant="danger" show={displayAlert}>A domain with this name already exists</Alert>
            <FormGroup as={Row} controlId="name">
                <FormLabel column sm="2">Name</FormLabel>
                <Col sm="10">
                    <FormControl required placeholder="Type name of the domain"></FormControl>
                    <FormText className="text-muted">Name of the domain</FormText>
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="color">
                <FormLabel column sm="2">Color</FormLabel>
                <Col sm="10">
                    <FormControl required type="Color" placeholder="Color of the domain"></FormControl>
                    <FormText className="text-muted">Color used to display the domain</FormText>
                </Col>
            </FormGroup>
            <Row>
                <Col sm="2"></Col>
                <Col sm="10">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}