import Domain from './domain';
import mongoose from 'mongoose';
import kubernetesService from '../kubernetes/kubernetes-services';


async function create(name, namespace, color, parentStr) {
    let parent;
    if (parentStr) {
        const parentObject = await findObjectById(parentStr);
        console.log(parentObject);
        if (!parentObject) {
            throw Error('Object not found');
        }
        parent = mongoose.Types.ObjectId(parentStr);
    }

    const domain = new Domain({ 
        name: name,
        color: color,
        namespace: namespace,
        parent: parent
    })
     
    domain.save();
}
exports.create = create;



async function update(_id, name, namespace, color) {
    const domain = await findObjectById(_id);
    console.log(domain);
    if (!domain) {
        throw Error('Object not found');
    }

    domain.name = name;
    domain.namespace = namespace;
    domain.color = color;
     
    return domain.save()
}
exports.update = update;


async function deleteById(id) {
    console.log("id:" + id);
    Domain.deleteOne({_id : id}, function (err) {
        if (err) return handleError(err);
    });
}
exports.deleteById = deleteById;


async function findObjectById(id) {
    console.log("id:" + id);
    const domain =  await Domain.findById(id);

    return domain;
}
exports.findObjectById = findObjectById;


async function findGraphById(id) {
    console.log("id:" + id);
    const domains =  await Domain.aggregate()
        .match({ _id: mongoose.Types.ObjectId(id) })
        .graphLookup({ from: 'domains', as: 'subDomains', startWith: '$_id', connectFromField: '_id', connectToField: 'parent' })
        .graphLookup({ from: 'microservices', as: 'microServices', startWith: '$_id', connectFromField: '_id', connectToField: 'domain' });

    const domain = domains[0];
    
    if (domain.namespace) {
        const deployments = await kubernetesService.getDeployments(domain.namespace);
        domain.deployments = deployments;
    }

    return domain;
}
exports.findGraphById = findGraphById;


async function findAll(id) {
    const domainsTree =  await Domain.aggregate()
        .match({ parent: null })
        .graphLookup({ from: 'domains', as: 'subDomains', startWith: '$_id', connectFromField: '_id', connectToField: 'parent' })
        .graphLookup({ from: 'microservices', as: 'microServices', startWith: '$_id', connectFromField: '_id', connectToField: 'domain' });
    
    return domainsTree;
}
exports.findAll = findAll;