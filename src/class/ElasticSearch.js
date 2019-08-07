const AWS = require('aws-sdk');
const elasticsearch = require('elasticsearch');
const htpp_aws_es = require('http-aws-es');

const elastic = new elasticsearch.Client({
  // hosts: [process.env.ELASTIC],
  hosts: ["https://search-siemens-dev-n652xq4iittadw3zks5qnninla.us-east-1.es.amazonaws.com"],
  connectionClass: htpp_aws_es,
  awsConfig: new AWS.Config({ region: 'us-east-1' })
});

const ElasticCreateIndex = async (index) => {
  const es = await elastic.indices.create({ index });
  return es;
};

const ElasticDeleteIndex = async (index) => {
  const es = await elastic.indices.delete({ index });
  return es;
};

const ElasticDeleteDocumentByQuery = async (index, type, body) => {
  const es = await elastic.deleteByQuery({
    index,
    type,
    body
  });

  return es;
};

const ElasticSearchDocuments = async (index, type, body) => {

  const es = await elastic.search({
    index,
    type,
    body
  });
  return es;
};

const ElasticIndexExists = async (index) => {

  const es = await elastic.indices.exists({
    index
  });
  return es;

};

const ElasticCreateDocument = async (index, type, body) => {
  const es = await elastic.index({
    index,
    type,
    body
  });

  return es;
};

const ElasticPutMapping = async (index, type, body) => {

  const es = await elastic.indices.putMapping({
    index,
    type,
    body
  });

  return es;
};

const ElasticGetMapping = async (index, type, body) => {

  const es = await elastic.indices.getMapping({
    index,
    type,
    body
  });

  return es;
};

const ElasticUpdateByQueryDocument = async (index, type, body) => {
  const es = await elastic.updateByQuery({
    index,
    type,
    body
  });

  return es;
};


const ElasticUpdateDocument = async (index, type, id, body) => {
  const es = await elastic.update({
    id,
    index,
    type,
    body
  });

  return es;
};

export { ElasticCreateIndex, ElasticDeleteIndex, ElasticSearchDocuments, ElasticDeleteDocumentByQuery, ElasticCreateDocument, ElasticPutMapping, ElasticIndexExists, ElasticUpdateByQueryDocument, ElasticGetMapping, ElasticUpdateDocument };
