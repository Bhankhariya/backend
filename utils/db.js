const mongoose = require("mongoose");


const URI = "mongodb+srv://dhruv18082002:Dhruv%401808@cluster0.pgli8mx.mongodb.net/Extra?retryWrites=true&w=majority";
// mongoose.connect(URI);
// password Dhruv@1808 but in link we write Dhruv%401808 in @ = %40

const connectdb = async() => { 
    try {
        await mongoose.connect(URI);
        console.log("successfull");
    } catch (error) {
        console.log("db problem");
        process.exit(0);
    }
}

module.exports = connectdb;