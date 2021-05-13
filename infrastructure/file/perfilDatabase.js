const fs = require('fs');

class PerfilDatabase{

    constructor({ file } = data){
        this.file = file
    }

    async find(){
        const data = await this.read()
        return data;
    }

    async read(){
        const data = await fs.readFileSync(this.file)
        return JSON.parse(data);
    }

    async create( content ){


        try {
            const data = await this.read()
            data.push(content)
            await fs.writeFileSync(this.file, JSON.stringify(data));
        } catch (error) {
            throw error            
        }
    }
}

module.exports = PerfilDatabase