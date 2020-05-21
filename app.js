const express  = require("express");
const expressValidator=require("express-validator");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();

// import routes
const userRoutes = require("./routes/user");
const authRoutes= require("./routes/auth");
const categoryRoute=require("./routes/category");
const productRoute=require("./routes/product");
const braintreeRoute=require("./routes/braintree");
const order=require("./routes/order");
const app = express();

//connect db

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false

    })
    .then(() => console.log('DB Connected'));

// middlewares 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// use routes

app.use("/api",userRoutes);
app.use("/api",authRoutes);
app.use("/api",categoryRoute);
app.use("/api",productRoute);
app.use("/api",braintreeRoute);
app.use("/api",order);

app.get("/",(req,res)=>{
    res.send("Hii devvv");
})

const port = process.env.port || 8000;

app.listen(port,() => {
    console.log(`Server running at ${port}`);
})