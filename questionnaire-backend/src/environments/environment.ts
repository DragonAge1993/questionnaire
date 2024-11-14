export const environment = {
    http: {
        host: '0.0.0.0',
        port: 3000
    },
    mongoose: {
        uri: 'mongodb://root:examplequestionnaire@mongo:27017/questionnaire?authSource=admin',
        options: {
            reconnectTries: Number.MAX_VALUE,
            autoReconnect : true,
            useNewUrlParser: true
        }
    }
};
