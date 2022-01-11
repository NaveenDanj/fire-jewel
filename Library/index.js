const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');


class Model {

    constructor(schema , collection_name , app){
        this.data = schema;
        this.db = getFirestore(app);
        this.collection_name = collection_name;
    }

    async all(){

        const coll = collection(this.db, this.collection_name);
        const collSnapshot = await getDocs(coll);
        const collList = []; 

        collSnapshot.docs.forEach(doc => {
            let data = doc.data();
            let doc_key_list = Object.keys(data);
            let schema_key_list = Object.keys(this.data);

            if( !this._check(doc_key_list , schema_key_list) ){
                throw Error('Not in correct shape. Requeired shape is ' +  Object.keys( this.data ).toString());
            }else{
                collList.push(data);
            }

        })
        return collList;

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

module.exports = Model;