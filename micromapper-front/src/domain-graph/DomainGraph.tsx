import React, {useState} from 'react';
import './DomainGraph.css';
import { CardDeck, CardGroup, Button } from 'react-bootstrap';
import DomainCard from './DomainCard';
import Domain from '../entities/Domain';
import MicroService from '../entities/MicroService';
import DomainModal from '../domain/DomainModal';
import MicroServiceModal from '../microservice/MicroServiceModal';

export default function DomainGraph(props: any) {
    const [modalShow, setModalShow] = useState(false);    
    const [modalDomain, setModalDomain] = useState<Domain>();
    const [parentDomain, setParentDomain] = useState<Domain>();

    const [modalMicroServiceShow, setModalMicroServiceShow] = useState(false);    
    const [modalMicroServiceDomain, setModalMicroServiceDomain] = useState<Domain>();
    const [modalMicroService, setModalMicroService] = useState<MicroService>();


    return (
        <div>
            <CardGroup style={{display: 'flex', flexDirection: 'row', flexGrow: 4, flexWrap: 'wrap'}}>
            {
                props.domains.map((domain: Domain, i:number) => 
                    <DomainCard domain={domain} key={i} 
                        showModal={ (parentDomain: Domain, modalDomain: Domain) => {
                            setParentDomain(parentDomain); 
                            setModalDomain(modalDomain); 
                            setModalShow(true)}
                        } 
                        showModalMicroService={ (domain: Domain, microService: MicroService) => {
                            setModalMicroServiceDomain(domain); 
                            setModalMicroService(microService); 
                            setModalMicroServiceShow(true)}
                        } 
                    />
                )
            }
            </CardGroup>

            <Button onClick={() => {
                setParentDomain(undefined); 
                setModalDomain(undefined); 
                setModalShow(true)}}>New domain</Button>



            <DomainModal 
                showDomainPanel={modalShow} 
                onHide={ () => { setModalShow(false) } } 
                refresh={ () => {props.refresh()} }
                domain={ modalDomain }
                parentDomain={ parentDomain } />

            <MicroServiceModal 
                showMicroServicePanel={modalMicroServiceShow} 
                onHide={ () => { setModalMicroServiceShow(false) } } 
                refresh={ () => {props.refresh()} }
                domain={ modalMicroServiceDomain }
                microService={ /*modalMicroService*/null } />

        </div>
    );
}
