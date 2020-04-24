import axios from 'axios';
import Domain from '../entities/Domain';


export default class {
    public async createDomain(domain: Domain, refresh: Function) {
        axios.post('http://localhost:8080/domains', domain)
            .then(() => {
                console.log('domain créé !')
                refresh();
            })
            
    }
    public async updateDomain(domain: Domain, refresh: Function) {
        return axios.put('http://localhost:8080/domains/'+domain._id, domain)
            .then(() => {
                console.log('domain mis à jour !')
                refresh();
            })
    }
    public deleteDomain(domainId: string, refresh: Function) {
        axios.delete('http://localhost:8080/domains/' + domainId)
        .then(() => {
            console.log('domaine supprimé !')
            refresh();
        })
        .catch((error) => {
            //setDisplayAlert(true);
            console.log(error);
        });    
    }
    
}
