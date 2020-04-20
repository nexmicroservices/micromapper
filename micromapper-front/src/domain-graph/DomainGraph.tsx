import React, {useState} from 'react';
import './DomainGraph.css';
import { CardGroup, Button } from 'react-bootstrap';
import DomainCard from './DomainCard';
import Domain from '../entities/Domain';
import DomainModal from '../domain/DomainModal';


export default function DomainGraph(props: any) {
    const [modalShow, setModalShow] = useState(false);    

    return (
        <div>
            <CardGroup>
            {
                props.domains.map((domain: Domain, i:number) => 
                    <DomainCard domain={domain} key={i} />
                )
            }
            </CardGroup>
            <DomainModal 
                showDomainPanel={modalShow} 
                onHide={ () => { setModalShow(false) } } 
                refresh={ () => {props.refresh()} } />
            <Button onClick={() => {setModalShow(true)}}>New domain</Button>
        </div>
    );
}
