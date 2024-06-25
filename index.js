require("dotenv").config();
let express = require('express');
let app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const orderRoute = require("./router/order-router");
const ocationalRoute = require("./router/ocational-router");
const connectdb = require("./utils/db");
// Remove the cors import and configuration
// let cors = require('cors');
const errorMiddleware = require("./middlewares/error-middleware");

// Remove the CORS configuration
// const corsOptions = {
//     origin: "http://localhost:3000",
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// };
// app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/form", orderRoute);
app.use("/api/form", ocationalRoute);
app.use(errorMiddleware);

const PORT = 8560;

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`run : ${PORT}`);
    });
});

