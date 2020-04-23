import axios from 'axios';


export default class {
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
