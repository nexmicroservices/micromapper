import express from 'express';
import services from './microservice-services';
import kubernetes from '../kubernetes/kubernetes-services';

const routes  = express.Router();

routes.post('/', async (req, res) => {
    const name = req.body.name;
    const domain = req.body.domain;
 
    if (!name || !domain) { 
        throw new Error('Missing parameters');
    }

    const microservice = await services.create(name, domain);
    
    res.json(microservice)
    return
 
})


routes.get('/status', async (req, res) => {
    const namespace = req.query.namespace ? req.query.namespace: 'default';
    const pods = await kubernetes.getDeployments(namespace);
    console.log("pods:");
    console.log(pods);
    res.json(pods)
    return 
})



routes.put('/:id', async (req, res) => {
    const _id = req.params.id
    const name = req.body.name;
 
    if (!_id, !name) { 
        throw new Error('Missing parameters');
    }

    const microservice = await services.update(_id, name);
    
    res.json(microservice)
    return
 
})


routes.get('/:id', async (req, res) => {
    const id = req.params.id
    const microservice = await services.findById(id);
    res.json(microservice)
    return 
})


routes.delete('/:id', async (req, res) => {
    const id = req.params.id
    await services.deleteById(id);
    return
})

module.exports = routes;