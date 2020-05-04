import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name: String,
    deployment: String,
    domain: mongoose.Types.ObjectId
}, {versionKey: false})

module.exports = mongoose.model('Microservice', schema);