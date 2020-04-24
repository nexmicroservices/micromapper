import Domain from "./Domain";

export default class MicroService {
    constructor(_id:string, domain: Domain, name: string, description: string, versions: string[]) {
        this._id = _id;
        this.domain = domain;
        this.name = name;
        this.description = description;
        this.versions = versions;
    }
    _id?: string;
    domain: Domain;
    name: string;
    description?: string;
    versions?: string[];
}
