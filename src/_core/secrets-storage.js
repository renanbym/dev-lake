const AWS = require('aws-sdk');

const ssm = new AWS.SSM({ region: process.env.AWS_REGION });

const EXPIRY_TIME = 3 * 60 * 1000; // 3 min
let secrets;
let expiryIn = new Date(0);

const searchKey = key => secrets[key];

const getAll = () => new Promise((resolve, reject) => {
    secrets = {};

    try {
        const params = {
            Recursive: true,
            WithDecryption: true
        };

        const getParameters = async (ssmParams) => {
            const result = await ssm.getParametersByPath(ssmParams).promise();
            console.log(result);
            for (const p of result.Parameters) {
                const key = p.Name.replace(`${ssmParams.Path}/`, '');
                secrets[key] = p.Value;
            }

            if (result.NextToken) {
                ssmParams.NextToken = result.NextToken;
                getParameters(ssmParams);
            } else {
                expiryIn = new Date(new Date().getTime() + EXPIRY_TIME);
                return resolve(secrets);
            }
        };

        return getParameters(params);
    } catch (e) {
        return reject(('Not Found Secret'));
    }

});

const getSecret = key => new Promise(async (resolve, reject) => {
    try {
        let result;


        const now = new Date();
        if (now >= expiryIn) {
            secrets = null;
        }

        if (secrets) {
            // já carregou, busca a chave
            result = searchKey(key);

            if (result) {
                return resolve(result);
            }

            throw ('Not Found Secret.');
        }

        await getAll();

        if (secrets) {
            result = searchKey(key);

            if (result) {
                return resolve(result);
            }
            return reject(('Not Found Secret!'));
        }
    } catch (e) {
        return reject(('Not Found Secret'));
    }
});

module.exports = { getSecret, getAll };