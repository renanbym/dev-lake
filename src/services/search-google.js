import { ElasticCreateDocument } from '../class/ElasticSearch';

const google = require('google-it');


const handler = (event, context, callback) => {

  const search = await google({ 'no-display': true, 'only-urls': true, 'limit': 1, 'query': 'site:linkedin.com/in/ AND "javascript developer" AND "Lisbon"' });

  for(const url of search){

  }

  await ElasticCreateDocument('dev-lake', '_doc', payload);

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ pong: 'node' })
  });

};


module.exports.handler = handler