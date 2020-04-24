import React, { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Domain from "../entities/Domain";
import MicroService from "../entities/MicroService";
import MicroServiceCard from './MicroServiceCard';
import DomainServices from '../domain/DomainServices';



function domainCardStyle(domain : Domain) {
    return {
        backgroundColor: domain.color
    }
}


export default function DomainCard(props: any) {
    const [showSubDomains, setShowSubDomains] = useState(false);
    const [showMicroServices, setShowMicroServices] = useState(false);

    let domain:Domain = props.domain;
    let domainServices = new DomainServices();

    return (
        <Col style = {{flex:1}} >
            <Card body style={ domainCardStyle(domain) }>
                <Card.Title style={{ whiteSpace: 'nowrap'}}>
                    {domain.name} 
                    <Button variant="link" size="sm" className="float-right"
                        onClick = { () => props.showModal(null, domain)}  ><FontAwesomeIcon icon="edit" /></Button>
                    <Button variant="link" size="sm" className="float-right"
                        onClick = { () => domainServices.deleteDomain(domain._id!, props.refresh) }  ><FontAwesomeIcon icon="trash-alt" /></Button>
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
                                    showModal={() => {props.showModal(domain, subDomain)}}
                                    showModalMicroService={() => {props.showModalMicroService(domain, undefined)}} />);
                        })
                    : <></>
                }



                <div style={{ whiteSpace: 'nowrap'}}>
                    {domain.microServices && domain.microServices.length>0?domain.microServices.length:'No'} microservices
                    {(domain.microServices && domain.microServices.length>0?
                    <Button variant="link" size="sm" onClick={ () => setShowMicroServices(!showMicroServices) }>{showMicroServices?<FontAwesomeIcon icon="eye-slash" />:<FontAwesomeIcon icon="eye" />}</Button>
                    :<></>)}
                    <Button variant="link" size="sm"
                        onClick = { () => props.showModalMicroService(domain, undefined)}  ><FontAwesomeIcon icon="plus" /></Button>
                </div>

                {
                    showMicroServices && domain.microServices ? 
                    domain.microServices.map((microService: MicroService, i) => {
                        return (<MicroServiceCard microService = {microService}  />);
                    })
                : <></>
                }
            </Card>
        </Col>
    );
}