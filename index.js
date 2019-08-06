const scrapedin = require('scrapedin')
const google = require('google-it')
const config = require('./config')

begin = async () => {
    console.log('begin')
    const profileScraper = await scrapedin(config.linkedin)
    const profile = await profileScraper('https://www.linkedin.com/in/renanbym');

    console.log(profileScraper);
    console.log(profile);
}


const search = async () => {
    const search = await google({ 'no-display': true, 'only-urls': true, 'limit': 1, 'query': 'site:linkedin.com/in/ AND "javascript developer" AND "Lisbon"' });
    console.log(search);
    console.log(search.length);
}

search();
// begin();