const { initializeApp } =  require('firebase/app');

module.exports = {

    init : (credentials) => {

        const app = initializeApp(credentials);
        return app;
    
    }

}