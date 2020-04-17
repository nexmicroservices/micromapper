import React from 'react';
import { Col } from 'react-bootstrap';
import Domain from "../entities/Domain";
import MicroService from "../entities/MicroService";
import MicroServiceCard from './MicroServiceCard';



function domainCardStyle(domain : Domain) {
    return {
        backgroundColor: domain.color,
        padding: '10px 10px 0px 10px'
    }
}


export default function DomainCard(props: any) {
    let domain:Domain = props.domain;

    return (
        <Col style={ domainCardStyle(domain) }>
            {domain.name}
            { 
                (domain.subDomains ? 
                    domain.subDomains.map((subDomain: Domain, i) => {
                        return (<DomainCard domain = {subDomain} key={i}  />);
                    })
                :<></>)
            }
            { 
                (domain.microServices ? 
                    domain.microServices.map((microService: MicroService, i) => {
                        return (<MicroServiceCard microService = {microService}  />);
                    })
                :<></>)
            }
        </Col>
    );
}

/*
export default class DomainCard extends Component {
    constructor(props: any, public domain: Domain) {
        super(props);
        this.domain = domain;
    }

    //{ 
        //this.domain.microServices.forEach(microService => {
        //<MicroServiceCard microService = microService />
        //}
    //)}

    render() {
        return (
            <Col style={ domainCardStyle(this.domain) }>
                {this.domain.name}
                <div />
            </Col>
        );
    }
}
*/