const google = require('google-it')
const { connect } = require('../_core/connection')
const Perfil = require('../models/Perfil')
const { requestQueue } = require('../_core/aws-build-request');

const parseBody = (event) => {

  if (event.isOffline) {
    return event
  } else {
    return JSON.parse(event.body)
  }

}

const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {

    const data = parseBody(event);
    await connect();

    const search = await google({ 'no-display': true, 'only-urls': true, 'limit': 100, 'query': `site:linkedin.com/in/ AND "${data.position}" AND "${data.location}"` });

    const create = async (url) => {
      const dataPerfil = await Perfil.update(
        { url },
        { $set: { url, status: 'created' }, $addToSet: { search: { position: data.position, location: data.location } } },
        { upsert: true, new: true }
      );
      await requestQueue({ id: dataPerfil._id }, 'updateProfileQueue');
    }


    for (const url of search) {

      if (/^https?\:\/\/[a-z]{0,2}?\.linkedin\.com\/in\//.test(url.link)) {
        await create(url.link)
      }

    }


    return callback(null, { statusCode: 200, body: JSON.stringify({ search }) });
  } catch (error) {
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) });
  }


};


module.exports.handler = handler