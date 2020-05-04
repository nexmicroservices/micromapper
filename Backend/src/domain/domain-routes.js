import express from 'express';
import services from './domain-services';

const routes  = express.Router();

routes.post('/', async (req, res) => {
    const name = req.body.name;
    const namespace = req.body.namespace;
    const color = req.body.color;
    const parent = req.body.parentDomain;
 
    if (!name || !color) { 
        throw new Error('Missing parameters');
    }

    const domain = await services.create(name, namespace, color, parent);
    
    res.json(domain)
    return
 
})

routes.put('/:id', async (req, res) => {
    const _id = req.params.id
    const namespace = req.body.namespace;
    const name = req.body.name;
    const color = req.body.color;
 
    if (!_id, !name || !color) { 
        throw new Error('Missing parameters');
    }

    const domain = await services.update(_id, name, namespace, color);
    
    res.json(domain)
    return
 
})

routes.get('/', async (req, res) => {
    const domains = await services.findAll();
    res.json(domains)
    return
 
})

routes.get('/:id', async (req, res) => {
    const id = req.params.id
    const domain = await services.findGraphById(id);
    console.log("my domain : " + domain);
    res.json(domain)
    return 
})


routes.delete('/:id', async (req, res) => {
    const id = req.params.id
    const domain = await services.deleteById(id);
    return
})

module.exports = routes;