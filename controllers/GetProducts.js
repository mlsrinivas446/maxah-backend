const Product = require("../productModel")

//Api to get all products
const GetProducts =async ( req, res ) => {
    try {
        const products =await Product.find({})
        res.json({products: products, success: true})
    }
    catch (error) {
        console.error("Error retrieving products:", error?.message);
        return res.status(500).json({
            message: error?.message || error,
            success: false
        });
    }
}

module.exports = GetProducts;
