import MetadataModel from '../models/metadata.js';

export default class MetadataQuery(params) {

    _query = null;

    constructor(params) {
        let matches = Object.values(params).map(entry => ({ $elemMatch: entry }));
        this._query = { metadata: { $all: matches } }
    }

    find() {
        return MetadataModel.find(this._query)
    }
}