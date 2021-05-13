const scrapedin = require('scrapedin')
const { connect } = require('../_core/connection')
const Perfil = require('../models/Perfil')
const { getSecret } = require('../_core/secrets-storage');


const PerfilFactory = require("../../src/factories/perfilFactory")
const PerfilService = PerfilFactory.generateInstance()

try {
  const data = { id: "123"};

  await connect()

  const perfilData = await PerfilService.find(data.id)

  const email = await getSecret('linkedin_email')
  const password = await getSecret('linkedin_password')

  const profileScraper = await scrapedin({ email, password })
  const profile = await profileScraper(perfilData.url)

  perfilData = await PerfilService.update( data.id, Object.assign({}, profile, profile.profileAlternative));

  console.log(perfilData)
} catch (error) {
  console.log(error)
}
