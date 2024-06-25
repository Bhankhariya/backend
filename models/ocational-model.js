const{Schema, model} = require("mongoose");

const ocationalSchema = new Schema({
    username: { type:String, required:true},
    email: { type:String, required:true},
    phone: { type:String, required:true},
    date: { type:String, required:true},
    guest: { type:String, required:true},
    address: { type:String, required:true},
    detail: { type:String, required:true},
    
});

// create model or collection 

const Ocational = new model('ocational',ocationalSchema);
module.exports = Ocational;