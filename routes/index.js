const express = require("express")
//importing controller function to handle the logics
const GetProducts = require("../controllers/GetProducts")
const DeleteProduct = require("../controllers/DeleteProduct")
const PostProduct = require("../controllers/PostProduct")
const UpdateProduct = require("../controllers/UpdateProduct")
const ProductDetails = require("../controllers/ProductDetails")

// Initialize the router
const router = express.Router()

router.get("/products", GetProducts)
router.post("/add-product", PostProduct)
router.put("/update-product/:id", UpdateProduct)
router.delete("/delete-product/:id", DeleteProduct)
router.get("/product-details/:id", ProductDetails)

module.exports  = router