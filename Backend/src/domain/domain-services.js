import Domain from './domain';
import mongoose from 'mongoose';


async function create(name, color, parentStr) {
    let parent;
    if (parentStr) {
        const parentObject = await findById(parentStr);
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
     
    return domain.save()
}
exports.create = create;



async function update(_id, name, color) {
    const domain = await findById(_id);
    console.log(domain);
    if (!domain) {
        throw Error('Object not found');
    }

    domain.name = name;
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


async function findById(id) {
    console.log("id:" + id);
    const domains =  await Domain.aggregate()
        .match({ _id: mongoose.Types.ObjectId(id) })
        .graphLookup({ from: 'domains', as: 'subDomains', startWith: '$_id', connectFromField: '_id', connectToField: 'parent' })
        .graphLookup({ from: 'microservices', as: 'microServices', startWith: '$_id', connectFromField: '_id', connectToField: 'domain' });


    return domains[0];
}
exports.findById = findById;


async function findAll(id) {
    const domainsTree =  await Domain.aggregate()
        .match({ parent: null })
        .graphLookup({ from: 'domains', as: 'subDomains', startWith: '$_id', connectFromField: '_id', connectToField: 'parent' })
        .graphLookup({ from: 'microservices', as: 'microServices', startWith: '$_id', connectFromField: '_id', connectToField: 'domain' });
    return domainsTree;
}
exports.findAll = findAll;