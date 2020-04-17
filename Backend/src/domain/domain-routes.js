import express from 'express';
import Domain from './domain';
import services from './domain-services';
import mongoose from 'mongoose';

const routes  = express.Router();

routes.post('/', async (req, res) => {
    const name = req.body.name;
    const color = req.body.color;
    const parentStr = req.body.parent;
 
    if (!name || !color) { 
        throw new Error('Missing parameters');
    }
 
    let parent;
    if (parentStr) {
        const parentObject = await services.findById(parentStr);
        console.log(parentObject);
        if (!parentObject) {
            throw Error('Object not found');
        }
        parent = mongoose.Types.ObjectId(parentStr);
    }

    const domain = new Domain({ 
        name: name,
        color: color,
        parent: parent
    })
     
    await domain.save()
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