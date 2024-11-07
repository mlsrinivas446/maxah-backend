const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
//const axios = require("axios")
//const Product = require("./productModel")
const router = require("./routes/index")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

const PORT = process.env.PORT

app.use("/api", router)

// Establish DBServer
async function initializeDBServer(){
    try {
        app.listen(PORT, () => {
            console.log("Server running at ",PORT)
        })
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB server established")
    }
    catch (error) {
        console.log("server connection error: "+ error?.message )
    }
}
initializeDBServer()

/*
const fetchProducts = async () => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        products = response.data;
        await Product.insertMany(products)
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
};

fetchProducts()*/

