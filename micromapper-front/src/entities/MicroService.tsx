import React from 'react';

export default class MicroService {
    constructor(name: string, description: string, versions: string[]) {
        this.name = name;
        this.description = description;
        this.versions = versions;
    }
    name: string;
    description: string;
    versions: string[];
}
