import React from 'react'
import { Modal } from 'react-bootstrap'
import DomainPanel from './DomainPanel'

export default function(props: any) {
    return (
        <Modal id="domainModal" show={ props.showDomainPanel } size="lg" onHide={ () => {props.onHide()} }>
            <Modal.Header closeButton>
                <Modal.Title>
                    Ajout d'un domaine
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DomainPanel onClose={ () => {props.onHide()}} refresh={() => {props.refresh()}} />
            </Modal.Body>
        </Modal>
    );
}