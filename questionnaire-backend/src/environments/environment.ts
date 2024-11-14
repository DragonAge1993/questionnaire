export const environment = {
    http: {
        host: 'backend',
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
