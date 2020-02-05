const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/';
function create_db (db_name,collection_name){
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        let mydb=db.db(db_name)
        mydb.createCollection(collection_name,(err,res)=>{
            if(err) throw err;
            console.log("collection as created ... done");
            db.close();
        })
    })
}
module.exports = create_db;