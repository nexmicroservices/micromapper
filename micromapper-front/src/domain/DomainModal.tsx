import React from 'react'
import { Modal } from 'react-bootstrap'
import DomainPanel from './DomainPanel'

export default function(props: any) {
    return (
        <Modal id="domainModal" show={ props.showDomainPanel } size="lg" onHide={ () => {props.onHide()} }>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.domain ? 'Domain update':'Domain creation'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DomainPanel 
                    onClose={ () => {props.onHide()}} refresh={() => {props.refresh()}} 
                    domain={props.domain} 
                    parentDomain={props.parentDomain} />
            </Modal.Body>
        </Modal>
    );
}