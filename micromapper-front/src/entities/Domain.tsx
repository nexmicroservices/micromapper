import React from 'react';
import MicroService from './MicroService';

export default interface Domain {
    _id?: string;
    name: string;
    color: string;
    namespace: string;
    microServices?: MicroService[];
    subDomains?: Domain[];
    parentDomain?: Domain;
}
