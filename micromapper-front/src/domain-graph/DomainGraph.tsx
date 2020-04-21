import React, {useState} from 'react';
import './DomainGraph.css';
import { CardGroup, Button } from 'react-bootstrap';
import DomainCard from './DomainCard';
import Domain from '../entities/Domain';
import DomainModal from '../domain/DomainModal';

export default function DomainGraph(props: any) {
    const [modalShow, setModalShow] = useState(false);    
    const [modalDomain, setModalDomain] = useState<Domain>();
    const [parentDomain, setParentDomain] = useState<Domain>();

    return (
        <div>
            <CardGroup>
            {
                props.domains.map((domain: Domain, i:number) => 
                    <DomainCard domain={domain} key={i} showModal={ (parentDomain: Domain, modalDomain: Domain) => {
                        console.log('showmodal');
                        console.log(modalDomain);
                        console.log(parentDomain);
                        setParentDomain(parentDomain); 
                        setModalDomain(modalDomain); 
                        setModalShow(true)}} />
                )
            }
            </CardGroup>
            <DomainModal 
                showDomainPanel={modalShow} 
                onHide={ () => { setModalShow(false) } } 
                refresh={ () => {props.refresh()} }
                domain={ modalDomain }
                parentDomain={ parentDomain } />
            <Button onClick={() => {
                setParentDomain(undefined); 
                setModalDomain(undefined); 
                setModalShow(true)}}>New domain</Button>
        </div>
    );
}
