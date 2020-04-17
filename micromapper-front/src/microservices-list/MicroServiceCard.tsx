import React from 'react';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import MicroService from '../entities/MicroService';
import { Accordion } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function MicroServiceCard(props: any) {
    let microService: MicroService = props.microService;
    let position: string =  props.position;

    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={position}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <span style={{ fontWeight: 'bold'}}>{microService.name} </span>
                                {microService.description}
                            </div>
                        </Col>
                        <Col md='2' style={{ textAlign:'right'}}>
                            <Form.Control as="select" style={{width:80}}>
                                {
                                    microService.versions.map((version, i) => {
                                        return <option key={i}>{version}</option>
                                    })
                                }
                            </Form.Control>
                        </Col>
                        <Col md='2' style={{ textAlign:'right'}}>
                            <Button>
                                Ticket Jira
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={position}>
                <Card.Body>Swagger-UI</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}
