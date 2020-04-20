import express from 'express';
import Domain from './domain';
import services from './domain-services';

const routes  = express.Router();

routes.post('/', async (req, res) => {
    const name = req.body.name;
    const color = req.body.color;
    const parent = req.body.parentDomain;
 
    if (!name || !color) { 
        throw new Error('Missing parameters');
    }

    const domain = await services.create(name, color, parent);
    
    res.json(domain)
    return
 
})

routes.put('/:id', async (req, res) => {
    const _id = req.params.id
    const name = req.body.name;
    const color = req.body.color;
 
    if (!_id, !name || !color) { 
        throw new Error('Missing parameters');
    }

    const domain = await services.update(_id, name, color);
    
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
    const domain = await services.findById(id);
    console.log("my domain : " + domain);
    res.json(domain)
    return
 
})

module.exports = routes;