const { connect } = require('../_core/connection')
const Perfil = require('../models/Perfil')
const { ObjectId } = require('mongodb')

const parseBody = (event) => {

  if (event.isOffline) {
    return event
  } else {
    return JSON.parse(event.body)
  }

}

const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    let search = {};

    await connect()

    if (event.pathParameters) {
      if (event.pathParameters.id) {
        search._id = new ObjectId(event.pathParameters.id);
      }
    }

    let result;

    if (search._id) {
      result = await Perfil.find(search);
      if (result.length > 0) {
        result = result[0];
      } else {
        return callback(null, { statusCode: 400, body: JSON.stringify({ error: 'error' }) })
      }
    } else {
      result = await Perfil.find(search);
    }


    return callback(null, { statusCode: 200, body: JSON.stringify(result) })
  } catch (error) {
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) })
  }

}


module.exports.handler = handler