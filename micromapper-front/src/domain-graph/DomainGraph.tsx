import React from 'react';
import './DomainGraph.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import DomainCard from './DomainCard';
import Domain from '../entities/Domain';
import MicroService from "../entities/MicroService";


export default function DomainGraph() {
    let domain : Domain;

    let microServices : MicroService[] = [];
    microServices[0] = new MicroService('Customers', 'CRUD des clients', ['1.0', '1.1', '1.2']);
    microServices[1] = new MicroService('Products', 'CRUD des produits', ['1.0', '1.1', '2.0']);

    domain = new Domain('Client', 'blue', microServices, []);

    return (<Container>
        <Row>
            <Col style={{
                backgroundColor: 'purple',
                padding: '10px 10px 10px 10px'
            }}>
                MyBank domain
                <Container>
                    <Row>
                        <DomainCard domain={domain} />
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
            </Col>
        </Row>
    </Container>);
}