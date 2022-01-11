const { getFirestore, 
    collection, 
    getDocs, 
    addDoc,
    query,
    where,
    updateDoc,
    doc
} = require('firebase/firestore/lite');


class Model {

    constructor(schema , collection_name , app){
        this.type = 'list';
        this.data = schema;
        this.data.id = '';
        this.doc_id = null;
        this.db = getFirestore(app);
        this.collection_name = collection_name;
        this.data_list = [];
    }

    async all(){

        const coll = collection(this.db, this.collection_name);
        const collSnapshot = await getDocs(coll);
        const collList = []; 

        collSnapshot.docs.forEach(doc => {
            let data = doc.data();
            data.id = doc.id;
            let doc_key_list = Object.keys(data);
            let schema_key_list = Object.keys(this.data);

            if( !this._check(doc_key_list , schema_key_list) ){
                throw Error('Not in correct shape. Requeired shape is ' +  Object.keys( this.data ).toString());
            }else{
                collList.push(data);
            }

        });

        this.type = 'multiple';
        return collList;

    }

    async create(data){

        let data_keys = Object.keys(data);
        let schema_keys = Object.keys(this.data);

        if( !this._check(data_keys , schema_keys) ){
            throw Error('Not in correct shape. Requeired shape is ' +  Object.keys( this.data ).toString());
        }else{
            const docRef = await addDoc(collection(this.db, this.collection_name), data);
            return docRef;
        }

    }

    async save(){
        const docRef = doc(this.db, this.collection_name, this.doc_id);
        await updateDoc(docRef, this.data);
    }

    async delete(){

        

    }

    async where(q1 , q2 , q3){
        const q = query(collection(this.db, this.collection_name),where(q1, q2, q3));
        const querySnapshot = await getDocs(q);
        this.data_list = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let doc_data = doc.data();
            doc_data.id = doc.id;
            this.data_list.push(doc_data);
        });

        return this;
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



    //util functions
    first(){
        this.data = this.data_list[0];
        this.doc_id = this.data.id;
        return this.data;
    }

    last(){
        this.data = this.data_list[ this.data_list.length-1];
        this.doc_id = this.data.id;
        return this.data;
    }


}

module.exports = Model;