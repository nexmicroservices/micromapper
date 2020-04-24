import React from 'react'
import { Modal } from 'react-bootstrap'
import MicroServicePanel from './MicroServicePanel'

export default function(props: any) {
    return (
        <Modal id="microServiceModal" show={ props.showMicroServicePanel } size="lg" onHide={ () => {props.onHide()} }>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.microService ? 'Micro service update':'Micro service creation'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MicroServicePanel 
                    onClose={ () => {props.onHide()}} refresh={() => {props.refresh()}} 
                    microService={props.microService} 
                    domain={props.domain} />
            </Modal.Body>
        </Modal>
    );
}