const { initializeApp } =  require('firebase/app');
const {orderBy, limit } = require("firebase/firestore");  

module.exports = {

    init : (credentials) => {
        const app = initializeApp(credentials);
        return app;
    },

    types : {
        number : 'number',
        boolean : 'boolean',
        string : 'string'
    },

    orderBy,
    limit

}