import React from 'react';
import MicroService from './MicroService';

export default interface Domain {
    name: string;
    color: string;
    microServices?: MicroService[];
    subDomains?: Domain[];
}
