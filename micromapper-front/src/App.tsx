import React from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TabsBar from './TabsBar';

function App() {
  return (
    <Container>
      <Row>
        <Col xs lg="1">
          toolbar
        </Col>
        <Col>
          <Row>
            <Col>Ecosystème microservices</Col>
          </Row>
          <Row>
            <Col>
              <TabsBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
