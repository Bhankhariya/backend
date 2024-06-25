require("dotenv").config();
let express = require('express');
let app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const ocationalRoute = require("./router/ocational-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend-three-rho-94.vercel.app');
    // Replace with your frontend's origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Allow specific headers
  next();
});


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
