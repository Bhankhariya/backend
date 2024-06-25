require("dotenv").config();
let express = require('express');
let app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const ocationalRoute = require("./router/ocational-router");
const connectdb = require("./utils/db");
let cors = require('cors');
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/form",orderRoute);
app.use("/api/form",ocationalRoute);
app.use(errorMiddleware);

const PORT = 8560;

connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`run : ${PORT}`);
    });

});

// #8 video


// mongo.connect("mongodb://127.0.0.1:27017/TiffinService");
// let db = mongo.connection;


// =============================  registration database code  ================================
// app.post('/register', async (req, res) => {
//     let uname = req.body.username;
//     let uemail = req.body.useremail;
//     let passw = req.body.password;
//     let hasspass = await bcrypt.hash(passw, 10);

//     let data = {
//         "username": uname,
//         "email": uemail,
//         "password": hasspass
//     };

//     db.collection('registration').insertOne(data, (err) => {
//         if(err){
//             res.status(404).send('Username already exixt')
//         }
//         res.redirect("http://localhost:3000/Login")
//     })
// })

// =========================================Login code===============================================

// app.post('/login', async (req, res) => {
//     let uname = req.body.username;
//     let passw = req.body.password;

//     let coll = db.collection('registration');
//     try {
//         let user = await coll.findOne({ "username": uname });

//         if (!user) {
//             res.status(404).send('user not found');
//             return;
//         }

//         let hasspass = await bcrypt.compare(passw, user.password);

//         if (!hasspass) {
//             res.status(401).send('invalid password');
//         } else {
            
//             res.redirect("http://localhost:3000/");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// })







// =============================  contact database code  ================================
// app.post('/contact', (req, res) => {
//     let name = req.body.name;
//     let email = req.body.email;
//     let message = req.body.message;

//     let data = {
//         "name": name,
//         "email": email,
//         "message": message
//     };

//     db.collection('contact').insertOne(data, (err) => {
//         if (err) throw err;
//         res.redirect("http://localhost:3000/Contact")
//     })
// })







// =============================  Lunch , Dinner Order  ==============================
// app.post('/ldorder',(req,res)=>{
//     let name = req.body.name;
//     let email = req.body.email;
//     let meal = req.body.mealType;
//     let spein = req.body.specialInstructions;

//     let data ={
//         "name":name,
//         "email":email,
//         "meal":meal,
//         "specialInstructions":spein
//     }

//     db.collection('LDorder').insertOne(data,(err)=>{
//         if(err) throw err;
//         res.redirect("http://localhost:3000/Order")
//     })
// })




// ======================================  Ocational Order  ===============================
// app.post('/oca',(req,res)=>{
//     let name = req.body.name;
//     let email = req.body.email;
//     let phone = req.body.phone;
//     let date = req.body.date;
//     let guests = req.body.guests;
//     let adddetails = req.body.details;

//     let data ={
//         "name":name,
//         "email":email,
//         "phone":phone,
//         "date":date,
//         "guests":guests,
//         "additional":adddetails
//     }

//     db.collection('ocational').insertOne(data,(err)=>{
//         if(err) throw err;
//         res.redirect("http://localhost:3000/Ocational")
//     })
// })










// app.listen(8560, (err) => { console.log("server running on http://localhost:8560/") });