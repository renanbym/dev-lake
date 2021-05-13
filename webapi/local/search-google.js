const google = require('google-it')

const PerfilFactory = require("../../src/factories/perfilFactory")
const PerfilService = PerfilFactory.generateInstance()
const Perfil = require("../../src/entities/perfil")
const Search = require("../../src/entities/search")

const handler = async () => {
  try {
    console.log('handler')

    const data = { position: "Cloud", location: "Lisbon" }
    console.log(data)

  
    const googleSearch = await google({ 'no-display': true, 'only-urls': true, 'limit': 100, 'query': `site:linkedin.com/in/ AND "${data.position}" AND "${data.location}"` }).catch(err =>   console.log(err) )
    
    const options = {
      'proxy': 'http://localhost:8118'
    };

    google({ options, 'query': `"${data.position}" AND "${data.location}"` }).then(results => {
      console.log('results', results)
    }).catch(e => {
      console.log('e', e)
    })

      
    console.log('googleSearch', googleSearch)
 
    const create = async (url) => {
      console.log('create')

      const search = new Search(data)
      const perfil = new Perfil({ url: url, search })

      PerfilService.create(perfil);
  
      // await requestQueue({ id: dataPerfil._id }, 'updateProfileQueue');
    }

    for (const url of googleSearch) {
      console.log(url)
      if (/^https?\:\/\/[a-z]{0,2}?\.linkedin\.com\/in\//.test(url.link)) {
        await create(url.link)
      }

    }

  } catch (error) {
    console.log(`errors ${error}`)
  }
}

handler()
