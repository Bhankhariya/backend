require("dotenv").config();
let express = require('express');
let app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const ocationalRoute = require("./router/ocational-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

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
