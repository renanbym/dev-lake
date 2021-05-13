class PerfilService {

    constructor({repository}){
        this.repository = repository
    }

    async find( id ){
        const data = {id}
        return this.repository.find( data )
    }

    async create(data){
        return this.repository.create( data )
    }

    async update(id, data){
        return this.repository.update( data )
    }

}

module.exports = PerfilService