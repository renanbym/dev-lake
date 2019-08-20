const mongoose = require('mongoose');
const { getSecret } = require('./secrets-storage');
let isConnected = false;
let connection;

const replacerRegexStringify = (name, val) => {
    // // convert RegExp to string
    if (val && val.constructor === RegExp) {
        return val.toString();
    } else if (name === 'str') {
        return undefined;
    }
    return val;
};

const customLogger = (coll, op, doc, proj) => {
    process.stdout.write(`${coll}.${op}(${JSON.stringify(doc, replacerRegexStringify)}`);
    if (proj) {
        process.stdout.write(`,${JSON.stringify(proj, replacerRegexStringify)})\n`);
    } else {
        process.stdout.write(')\n');
    }
};


const connect = (verbose = false) => new Promise(async (resolve, reject) => {

    try {
        if (verbose) {
            mongoose.set('debug', customLogger);
        }

        if (isConnected) {
            console.log('===> Aproveitando conexao');
            return resolve(connection);
        }

        const connectionString = await getSecret('mongodb_uri')
        console.log(connectionString)
        connection = await mongoose.connect(connectionString, {
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000
        });

        if (connection === mongoose) {
            isConnected = true;
            return resolve(connection);
        }

        return reject('error');
    } catch (e) {
        console.log('===> connect error', e);
        return reject(e);
    }
});

const disconnect = () => new Promise(async (resolve, reject) => {
    try {
        mongoose.connection.close(() => {
            isConnected = false;
            console.log('===> Desconectando conexao');
            resolve();
        });
    } catch (e) {
        console.log('===> disconnect error', e);
        return reject(e);
    }
});


module.exports = { connect, disconnect, mongoose };