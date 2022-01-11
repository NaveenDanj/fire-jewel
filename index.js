const { initializeApp } =  require('firebase/app');
const Model =  require('./Library/index');


const init = (credentials) => {

    const app = initializeApp(credentials);
    return app;

}

let app = init({
    apiKey: "AIzaSyBMAgDIEuHkuyeZYBrrHJofFrIQcN12l-8",
    authDomain: "fire-jewel.firebaseapp.com",
    projectId: "fire-jewel",
    storageBucket: "fire-jewel.appspot.com",
    messagingSenderId: "64508931280",
    appId: "1:64508931280:web:adaf6b13de286dc07bc2d5",
    measurementId: "G-BFLTD0853R"
})


const fetch = async() => {

    try{

        let user = new Model({
            username : '',
            password : '',
            uid : ''
        } , 'user' , app);
        
        console.log('the res is ' , await user.all());

    }catch(err){
        console.log(err);
    }


    
}

fetch();
