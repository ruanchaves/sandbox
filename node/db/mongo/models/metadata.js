let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let keySchema = new Schema({
    key: {type: String, index: true}, 
    value: {type: String, index: true} 
});

let metadataSchema = new Schema(metadata: [keySchema]);

let metadata = mongoose.model('Metadata', metadataSchema);

export default metadata;