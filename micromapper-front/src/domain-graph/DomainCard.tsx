import React, { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Domain from "../entities/Domain";
import MicroService from "../entities/MicroService";
import MicroServiceCard from './MicroServiceCard';



function domainCardStyle(domain : Domain) {
    return {
        backgroundColor: domain.color
    }
}


export default function DomainCard(props: any) {
    const [showSubDomains, setShowSubDomains] = useState(false);
    const [showMicroServices, setShowMicroServices] = useState(false);

    let domain:Domain = props.domain;

    return (
        <Col style = {{flex:1}} >
            <Card body style={ domainCardStyle(domain) }>
                <Card.Title style={{ whiteSpace: 'nowrap'}}>
                    {domain.name} 
                    <Button variant="link" size="sm" style={{whiteSpace:'nowrap'}} className="float-right"
                        onClick = { () => props.showModal(null, domain)}  ><FontAwesomeIcon icon="edit" /></Button>
                </Card.Title>



                <div style={{ whiteSpace: 'nowrap'}}>
                    {domain.subDomains && domain.subDomains.length>0?domain.subDomains.length:'No'} sub domains
                    {(domain.subDomains && domain.subDomains.length>0?
                    <Button variant="link" size="sm" onClick={ () => setShowSubDomains(!showSubDomains) }>{showSubDomains?<FontAwesomeIcon icon="eye-slash" />:<FontAwesomeIcon icon="eye" />}</Button>
                    :<></>)}
                    <Button variant="link" size="sm"
                        onClick = { () => props.showModal(domain, null)}  ><FontAwesomeIcon icon="plus" /></Button>
                </div>

                {
                    showSubDomains && domain.subDomains ? 
                        domain.subDomains.map((subDomain: Domain, i) => {
                            return (
                                <DomainCard 
                                    key={i} 
                                    domain = {subDomain}
                                    onClose={ () => {props.onHide()}} 
                                    refresh={() => {props.refresh()}} 
                                    parentDomain={domain}
                                    showModal={() => {props.showModal(domain, subDomain)}} />);        
                        })
                    : <></>
                }


                { 
                    (domain.microServices ? 
                        domain.microServices.map((microService: MicroService, i) => {
                            return (<MicroServiceCard microService = {microService}  />);
                        })
                    :<></>)
                }
            </Card>
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