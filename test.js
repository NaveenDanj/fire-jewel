const {init , types} = require('./Library/Utils');
const Model =  require('./Library/index');
const Validator = require('./Library/Validation');

let app = init({
    apiKey: "AIzaSyBMAgDIEuHkuyeZYBrrHJofFrIQcN12l-8",
    authDomain: "fire-jewel.firebaseapp.com",
    projectId: "fire-jewel",
    storageBucket: "fire-jewel.appspot.com",
    messagingSenderId: "64508931280",
    appId: "1:64508931280:web:adaf6b13de286dc07bc2d5",
    measurementId: "G-BFLTD0853R"
});


let schema = {
    username : '',
    password : '',
    uid : ''
};

class User extends Model {

    constructor(){
        super(schema , 'user' , app);
    }

}

const fetch = async() => {

    try{

        let user = new User();

        let req_users = await user.where('username' , '==' , 'John Doe');
        req_users.first();
        
        console.log('the customer is ' , req_users.data);

    }catch(err){
        console.log(err);
    }


    
}

const createUser = async() => {

    try{

        let user = new User();

        let user_validator = new Validator({
            username : types.string,
            password : types.string,
            uid : types.string
        })

        let test_data = {
            username : 90,
            password : false,
            uid : 'user1'
        }

        let res = user_validator.validate(test_data);
        console.log('the res is ' , res);

    }catch(err){
        console.log('the error is ' , err);
    }

}

// fetch();
createUser();