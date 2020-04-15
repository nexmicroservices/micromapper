import React from 'react';
import MicroService from './MicroService';

export default class Domain {
    constructor(public name: string, color: string, microServices: MicroService[], subDomains: Domain[]) {
        this.name = name;
        this.color = color;
        this.microServices = microServices;
        this.subDomains = subDomains;
    }
    color: string;
    microServices !: MicroService[];
    subDomains !: Domain[];
}
