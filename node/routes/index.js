import MongoDictionary from '../utils/mongo_dictionary';
import MetadataQuery from '../db/mongo/queries/metadata';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next){
  let dictionary = new MongoDictionary(req.query);
  let query = new MetadataQuery(dictionary);
  res.send(query.toArray());
});

module.exports = router;
