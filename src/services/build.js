const handler = (event, context, callback) => {

  try {
    const data = JSON.parse(event.body);

    return callback(null, { statusCode: 200, body: JSON.stringify({ pong: 'node' }) });
  } catch (e) {
    
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) });
  }

};


module.exports.handler = handler