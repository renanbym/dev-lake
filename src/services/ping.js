'use strict';

const handler = (event, context, callback) => {

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ ping: 'pong' })
  });

};


module.exports.handler = handler