const keys = {
    app: {
        baseUrl: 'https://sevenchill-api.herokuapp.com',
        uploadUrl: 'https://sevenchill-api.herokuapp.com',
        defaultPort: 3000,
        databaseUrl: 'mongodb+srv://dbAdmin:ot8LPbpYdJ9x9wRu@cluster0.z3naf.mongodb.net/seven_chill_api?retryWrites=true&w=majority',
        jwt: {
            secret: 'secret',
        },
        acceptedTokens: [
            'nF0KAGnAIHXly5A8NHz0ax2MugL85ySm',
            '<user_token>',
        ],
    },
    googleAuth: {
        clientId: '395671924877-rlsdvp41buc1e7kij7cirf9l1mrqmbne.apps.googleusercontent.com',
    },
};

module.exports = keys;
