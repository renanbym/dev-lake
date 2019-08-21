const scrapedin = require('scrapedin')
const { connect } = require('../_core/connection')
const Perfil = require('../models/Perfil')
const { ObjectId } = require('mongodb')
const { getSecret } = require('../_core/secrets-storage');


const handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const data = JSON.parse(event.Records[0].body);

    await connect()

    let perfilData = await Perfil.findById(new ObjectId(data.id))

    const email = await getSecret('linkedin_email')
    const password = await getSecret('linkedin_password')

    const profileScraper = await scrapedin({ email, password })
    const profile = await profileScraper(perfilData.url)

    perfilData = await Perfil.findOneAndUpdate(
      { _id: new ObjectId(data.id) },
      { $set: Object.assign({}, profile, profile.profileAlternative), status: 'updated' },
      { new: true }
    );

    return callback(null, { statusCode: 200, body: JSON.stringify(perfilData) })
  } catch (error) {
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) })
  }

}


module.exports.handler = handler