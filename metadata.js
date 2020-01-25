let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let keySchema = new Schema({key: 'string'});

let metadataSchema = new Schema(metadata: [keySchema]);

let metadata = mongoose.model('Metadata', metadataSchema);

export {metadata};