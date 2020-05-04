import axios from 'axios';
import MicroService from '../entities/MicroService';


export default class {
    public async createMicroService(microService: MicroService, refresh: Function) {
        axios.post('http://localhost:8080/microServices', {
            name: microService.name,
            deployment: microService.deployment,
            domain: microService.domain._id
        })
            .then(() => {
                console.log('MicroService créé !')
                refresh();
            })
            
    }
    public async updateMicroService(microService: MicroService, refresh: Function) {
        return axios.put('http://localhost:8080/microServices/'+microService._id, microService)
            .then(() => {
                console.log('MicroService mis à jour !')
                refresh();
            })
    }
    public deleteMicroService(microServiceId: string, refresh: Function) {
        axios.delete('http://localhost:8080/microServices/' + microServiceId)
        .then(() => {
            console.log('MicroService supprimé !')
            refresh();
        })
        .catch((error) => {
            console.log(error);
        });    
    }
    
}
