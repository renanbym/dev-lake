class PerfilRepository{
    constructor({storage}){
        this.storage = storage
    }

    async find(data){
        return await this.storage.find(data)
    }

    async create(data){
        return await this.storage.create(data);
    }
}

module.exports = PerfilRepository