import React, {useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Col, Row, Button, Alert } from 'react-bootstrap'
import Domain from '../entities/Domain'
import DomainServices from './DomainServices'


export default function(props: any) {
    const [displayAlert, setDisplayAlert] = useState(false);

    const domainServices = new DomainServices();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;

        setDisplayAlert(false);
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
          return;
        }

        const domain:Domain = {
            _id: (props.domain?props.domain._id:undefined),
            name : form.name.value,
            color : form.color.value,
            microServices : [],
            subDomains: [],
            parentDomain: (props.parentDomain?props.parentDomain._id:
                (props.domain && props.domain.parentDomain?props.domain.parentDomain._id:undefined))
        }

        if (props.domain && props.domain._id) {
            domainServices.updateDomain(domain, () => {props.refresh(); props.onClose();}).catch((error) => {
                setDisplayAlert(true);
                console.log(error);
            });
        } else {
            domainServices.createDomain(domain, () => {props.refresh(); props.onClose();}).catch((error) => {
                setDisplayAlert(true);
                console.log(error);
            });
        }

        //setValidated(true);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Alert variant="danger" show={displayAlert}>A domain with this name already exists</Alert>
            <FormGroup as={Row} controlId="parentDomainName">
                <FormLabel column sm="2">Parent</FormLabel>
                <Col sm="5">
                    { props.parentDomain? props.parentDomain.name:'' }
                </Col>
                <Col sm="5">
                    { props.parentDomain? props.parentDomain.color:'' }
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="name">
                <FormLabel column sm="2">Name</FormLabel>
                <Col sm="10">
                    <FormControl required placeholder="Type name of the domain" defaultValue={props.domain?props.domain.name:''} />
                    <FormText className="text-muted">Name of the domain</FormText>
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="color">
                <FormLabel column sm="2">Color</FormLabel>
                <Col sm="10">
                    <FormControl required type="Color" placeholder="Color of the domain" defaultValue={props.domain?props.domain.color:''} />
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