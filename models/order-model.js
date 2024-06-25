const{Schema, model} = require("mongoose");

const orderSchema = new Schema({
    username: { type:String, required:true},
    email: { type:String, required:true},
    mealtype: { type:String, required:true},
    number:{type:String, required:true},
    address: { type:String, required:true},
    special : { type:String, required:true},
});

// create model or collection 

const Order = new model('order',orderSchema);
module.exports = Order;