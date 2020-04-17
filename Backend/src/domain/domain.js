import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name: String,
    color: String,
    parent: mongoose.Types.ObjectId
}, {versionKey: false})

module.exports = mongoose.model('Domain', schema);