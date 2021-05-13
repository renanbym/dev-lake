const { v4: uuidv4 } = require('uuid');
class Perfil {
    constructor({ url, name, search } = data){
        this.id = uuidv4()
        this.url = url
        this.name = name
        this.search = search
    }
}

module.exports = Perfil