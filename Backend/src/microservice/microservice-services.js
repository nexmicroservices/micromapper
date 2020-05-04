import Microservice from './microservice';
import domainServices from '../domain/domain-services';
import mongoose from 'mongoose';


async function create(name, deployment, domainStr) {
    let domain;
    if (domainStr) {
        const domainObject = await domainServices.findObjectById(domainStr);
        console.log(domainObject);
        if (!domainObject) {
            throw Error('Domain not found');
        }
        domain = mongoose.Types.ObjectId(domainStr);
    }

    const microservice = new Microservice({ 
        name: name,
        deployment: deployment,
        domain: domain
    })
     
    return microservice.save()
}
exports.create = create;



async function update(_id, name) {
    const microservice = await findById(_id);
    console.log(microservice);
    if (!microservice) {
        throw Error('Microservice not found');
    }

    microservice.name = name;
    microservice.deployment = deployment;
     
    return microservice.save()
}
exports.update = update;


async function deleteById(id) {
    console.log("id:" + id);
    Microservice.deleteOne({_id : id}, function (err) {
        if (err) return handleError(err);
    });
}
exports.deleteById = deleteById;


async function findById(id) {
    console.log("id:" + id);
    const microservice = Microservice.findOne({_id : id})
    return microservice
}
exports.findById = findById;
