const PerfilRepository = require("../repositories/perfilRepository");
const PerfilService = require("../service/perfilService");
const PerfilDatabase = require("../../database/file/perfilDatabase")

const generateInstance = () => {
    const storage = new PerfilDatabase({ file: 'C:/Users/RenanCosta/workspace/dev-lake/database/file/perfil.json'});

    const repository = new PerfilRepository({
        storage
    });

    const service = new PerfilService({
        repository
    });
    return service
} 


module.exports =  {generateInstance}
