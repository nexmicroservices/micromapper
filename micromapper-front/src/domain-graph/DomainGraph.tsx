import React from 'react';
import './DomainGraph.css';
import { CardGroup } from 'react-bootstrap';
import DomainCard from './DomainCard';
import Domain from '../entities/Domain';


export default function DomainGraph(props: any) {
    return (
        <CardGroup>
        {
            props.domains.map((domain: Domain, i:number) => 
                <DomainCard domain={domain} key={i} />
            )
        }
        </CardGroup>
    );
}
