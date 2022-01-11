const {types} = require('./Utils');

class Validator {

    /* 
    sample schema object

    let schema = {

        username : types.string,
        password : types.string,
        id : types.string

    }
    
    
    
    */ 

    constructor(types){
        this.schema = types;
    }

    validate(data){

        let key_list =  Object.keys(data);
        let err_list = [];
        //key check
        if( this._check( key_list , Object.keys( this.schema ) ) ){
            throw Error('Required fields are not present');            
        }

        for(let i = 0; i < key_list.length; i++){

            if( typeof( data[key_list[i]] ) != this.schema[key_list[i]]  ){
                err_list.push('Type validation error. Required ' , this.schema[key_list[i]] , ' type, but got' , typeof( data[key_list[i]] ));
            }

        }

        if(err_list.length > 0){
            return err_list;
        }else{
            return false;
        }


    }

    _check(list1 , list2){

        for(let i = 0; i < list1.length; i++){

            let check = false;

            for(let j = 0; j < list2.length; j++){

                if(list1[i] == list2[j]){
                    check = true;
                }

            }

            if(!check){
                return false;
            }

        }

        return true;

    }




}