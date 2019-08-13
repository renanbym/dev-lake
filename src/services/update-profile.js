const scrapedin = require('scrapedin')
const config = require('../../config')
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
    const data = parseBody(event)

    await connect(true)

    let perfilData = await Perfil.findById(new ObjectId(data.id))

    const profileScraper = await scrapedin(config.linkedin)
    const profile = await profileScraper(perfilData.url)

    perfilData = await Perfil.findOneAndUpdate({ _id: new ObjectId(data.id) }, { $set: Object.assign({}, profile, profile.profileAlternative) }, { new: true });

    return callback(null, { statusCode: 200, body: JSON.stringify(perfilData) })
  } catch (error) {
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) })
  }

}


module.exports.handler = handler