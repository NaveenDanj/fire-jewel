const {init , types , Model , Validator ,orderBy , limit} = require('./index');


//this is the test file

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

        let req_users = await user.where('username' , '==' , 'John Doe' ,  limit(1));
        
        console.log('the customer is ' , req_users);

    }catch(err){
        console.log(err);
    }


    
}

const createUser = async() => {

    //create new user

    try{

        await new User().create({
            username : 'John Doe',
            password : 'john123',
            uid : 'user id 1'
        });

    }catch(err){
        console.log('the error is ' , err);
    }

}

const getUser = async() => {

    try{
        //find by query
        let users = await new User().where('username' , '==' , 'Naveen Dhananjaya Hettiwaththa');
        let user = users.first();
        console.log(user);

        //find by id
        let user2 = await new User().find('aJwQVdaih3z8zlS15GGR')
        console.log('found user is ' , user2.data);

    }catch(err){
        console.log(err);
    }


}

fetch();
// createUser();
// getUser();