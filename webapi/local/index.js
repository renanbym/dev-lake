const PerfilFactory = require("../../src/factories/perfilFactory")
const PerfilService = PerfilFactory.generateInstance()

const Perfil = require("../../src/entities/perfil")
const Search = require("../../src/entities/search")
const search = new Search({ position: "Dev", location: "São Paulo" })
const perfil = new Perfil({ url: "https://url", name: "Renan Costa", search })
 
try {
    PerfilService.create( perfil )
} catch (error) {
    console.log(error)
}