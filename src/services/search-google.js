const google = require('google-it')
const connectToDatabase = require('../_core/connection')
const Perfil = require('../models/Perfil')

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
    await connectToDatabase();

    const data = parseBody(event);

    // const search = await google({ 'no-display': true, 'only-urls': true, 'limit': 5, 'query': `site:linkedin.com/in/ AND "${data.position}" AND "${data.location}"` });
    const search = [
      { link: 'https://pt.linkedin.com/in/mariomcgoncalves' },
      { link: 'https://pt.linkedin.com/in/peterbouda' },
      { link: 'https://pt.linkedin.com/in/fabricionaweb' },
      { link: 'https://pt.linkedin.com/in/davidcanilho' }
    ];

    const find = await Perfil.find();

    console.log(find);

    for (const url of search) {

      if (/^https?\:\/\/[a-z]{0,2}?\.linkedin\.com\/in\//.test(url.link)) {
        console.log(url.link);

        const a = await Perfil.create({
          url: url.link,
          status: 'created'
        });

        console.log(a);

      }


    }


    return callback(null, { statusCode: 200, body: JSON.stringify({ pong: 'node' }) });
  } catch (error) {
    console.log(error);
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) });
  }


};


module.exports.handler = handler