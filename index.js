const {init} = require('./Library/Utils');
const Model =  require('./Library/index');

let app = init({
    apiKey: "AIzaSyBMAgDIEuHkuyeZYBrrHJofFrIQcN12l-8",
    authDomain: "fire-jewel.firebaseapp.com",
    projectId: "fire-jewel",
    storageBucket: "fire-jewel.appspot.com",
    messagingSenderId: "64508931280",
    appId: "1:64508931280:web:adaf6b13de286dc07bc2d5",
    measurementId: "G-BFLTD0853R"
});


const fetch = async() => {

    try{

        let user = new Model({
            username : '',
            password : '',
            uid : ''
        } , 'user' , app);

        let req_users = await user.where('username' , '==' , 'John Doe');
        req_users.first();
        req_users.delete();

    }catch(err){
        console.log(err);
    }


    
}

fetch();
