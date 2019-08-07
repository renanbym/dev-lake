'use strict';

const scrapedin = require('scrapedin')
const config = require('./config')

const handler = (event, context, callback) => {

  try {
    const data = JSON.parse(event.body);

    console.log('begin')
    const profileScraper = await scrapedin(config.linkedin)
    const profile = await profileScraper(data.url);

    console.log(profileScraper);
    console.log(profile);

    return callback(null, { statusCode: 200, body: JSON.stringify({ pong: 'node' }) });
  } catch (e) {
    
    return callback(null, { statusCode: 400, body: JSON.stringify({ error: error.message }) });
  }

};


module.exports.handler = handler