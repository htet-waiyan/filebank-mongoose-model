const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    starred: { type: Boolean, default: false },
    archived: { type: Boolean, default: false },
    label: [String],
    size: Number,
    createdDate: Date,
    createdTimestamp: Number,
    lastModifiedDate: Date,
    lastModifiedTimestamp: Number,
    extension: String,
    storageKey: String,
});

const Object = mongoose.model('Object', ObjectSchema);

module.exports = Object;

