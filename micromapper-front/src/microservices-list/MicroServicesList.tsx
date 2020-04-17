import React from 'react';
import { Accordion } from 'react-bootstrap';
import MicroService from '../entities/MicroService';
import MicroServiceCard from './MicroServiceCard';

export default function MicroServicesList(props: any) {
    //let microServices: MicroService[];
    //microServices = props.microServices;

    let microServices : MicroService[] = [];
    microServices[0] = new MicroService('Customers', 'CRUD des clients', ['1.0', '1.1', '1.2']);
    microServices[1] = new MicroService('Products', 'CRUD des produits', ['1.0', '1.1', '2.0']);

    return (
        <Accordion>
        {
            microServices.map((microService: MicroService, i) => {
                return (<MicroServiceCard microService={microService} position={i} key={i} />);  
            })
        }
        </Accordion>
    );
}