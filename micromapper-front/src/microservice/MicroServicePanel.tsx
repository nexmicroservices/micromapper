import React, {useState} from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Col, Row, Button, Alert } from 'react-bootstrap'
import MicroService from '../entities/MicroService'
import MicroServiceServices from './MicroServiceServices'


export default function(props: any) {
    const [displayAlert, setDisplayAlert] = useState(false);

    const microServiceServices = new MicroServiceServices();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;

        setDisplayAlert(false);
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
          return;
        }

        const microService:MicroService = {
            _id: (props.microService?props.microService._id:undefined),
            name: form.name.value,
            deployment: form.deployment.value,
            domain: props.domain
        }

        if (props.microService && props.microService._id) {
            microServiceServices.updateMicroService(microService, () => {props.refresh(); props.onClose();}).catch((error) => {
                setDisplayAlert(true);
                console.log(error);
            });
        } else {
            microServiceServices.createMicroService(microService, () => {props.refresh(); props.onClose();}).catch((error) => {
                setDisplayAlert(true);
                console.log(error);
            });
        }

        //setValidated(true);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Alert variant="danger" show={displayAlert}>A microservice with this name already exists</Alert>
            <FormGroup as={Row} controlId="DomainName">
                <FormLabel column sm="2">Domain</FormLabel>
                <Col sm="5">
                    { props.domain.name }
                </Col>
                <Col sm="5">
                    { props.domain.color }
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="name">
                <FormLabel column sm="2">Name</FormLabel>
                <Col sm="10">
                    <FormControl required placeholder="Type name of the microservice" defaultValue={props.microService?props.microService.name:''} />
                    <FormText className="text-muted">Name of the microservice</FormText>
                </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="deployment">
                <FormLabel column sm="2">Deployment</FormLabel>
                <Col sm="10">
                    <FormControl required placeholder="Kubernetes deployment name" defaultValue={props.microService?props.microService.deployment:''} />
                    <FormText className="text-muted">Kubernetes deployement name</FormText>
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