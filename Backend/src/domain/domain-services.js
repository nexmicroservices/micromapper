import Domain from './domain';

exports.findById = function(id) {
    console.log("id:" + id);
    const domainPromise = Domain.findOne({_id : id})//.catch(console.log("crash"))
    return domainPromise
}



async function findAll(id) {
    const domainsTree =  await Domain.aggregate()
        .match({ parent: null })
        .graphLookup({ from: 'domains', as: 'subDomains', startWith: '$_id', connectFromField: '_id', connectToField: 'parent' });
    return domainsTree;
}

exports.findAll = findAll