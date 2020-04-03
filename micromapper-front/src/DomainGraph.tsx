import React from 'react';
import './DomainGraph.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function DomainGraph() {
    return (
        
        <Container>
            <Row>
                <Col style={{
                    backgroundColor: 'blue'
                }}>
                    Test
                </Col>
                <Col style={{
                    backgroundColor: 'green'
                }}>
                    Test
                </Col>
            </Row>
            <Row>
                <Col style={{
                    backgroundColor: 'yellow'
                }}>
                    Test
                </Col>
                <Col style={{
                    backgroundColor: 'red'
                }}>
                    Test
                </Col>
                <Col style={{
                    backgroundColor: 'white'
                }}>
                    Test
                </Col>
            </Row>
        </Container>
    );
}

export default DomainGraph;