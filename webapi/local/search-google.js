const google = require('google-it');
const { exec } = require("child_process");

const PerfilFactory = require("../../src/factories/perfilFactory")
const PerfilService = PerfilFactory.generateInstance()

const QueueFactory = require("../../src/factories/queueFactory")
const QueueService = QueueFactory.generateInstance()

const Perfil = require("../../src/entities/perfil");
const Search = require("../../src/entities/search");


const handler = async () => {

  const data = { position: "Cloud", location: "Lisbon" }

  const query = `site:linkedin.com/in/ AND "${data.position}" AND "${data.location}"`
  console.log(query)
  exec(`google-it --query="${query}" --only-urls`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  // const googleSearch = await google({ 'no-display': true, 'only-urls': true, 'limit': 100, query }).catch(err => console.log(err));

  // console.log('googleSearch', googleSearch)

  // const create = async (url) => {
  //   console.log('create')

  //   const search = new Search(data)
  //   const perfil = new Perfil({ url: url, search })

  //   PerfilService.create(perfil);

  //   // QueueService.sendToQueue("perfil", Object.assign(perfil))
  // }

  // for (const url of googleSearch) {
  //   console.log(url)
  //   if (/^https?\:\/\/[a-z]{0,2}?\.linkedin\.com\/in\//.test(url.link)) {
  //     await create(url.link)
  //   }

  // }

}

try {
  handler();
} catch (error) {
  console.log(error)
}
