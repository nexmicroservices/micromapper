import React from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import MicroService from '../entities/MicroService';


export default function MicroServiceCard(props: any) {
    let microService: MicroService = props.microService;
    return (
        <Card style={{
            marginBottom: '10px'
        }}>
            <Card.Body>
                <Card.Title>
                    <Container>
                        <Row>
                            <Col>{ microService.name }</Col>
                            <Col xs='3' md='2' style={{
                                textAlign: 'right'
                            }}>
                                <Form.Control as="select" style={{width:80}}>
                                    {
                                        microService.versions?.map((version, i) => {
                                            return <option>{version}</option>
                                        })
                                    }
                                </Form.Control>
                            </Col>
                        </Row>
                    </Container>
                </Card.Title>
                <Card.Text>
                        { microService.description }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
