const { initializeApp } =  require('firebase/app');

module.exports = {

    init : (credentials) => {

        const app = initializeApp(credentials);
        return app;
    
    },

    types : {
        number : 'number',
        boolean : 'boolean',
        string : 'string'
    }

}