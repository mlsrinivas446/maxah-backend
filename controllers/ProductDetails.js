const Product = require("../productModel")

//Api to get product details based on productId
const ProductDetails =async ( req, res ) => {
    try {
        const { id } = req.params
        const product =await Product.findOne({_id:id})
        res.json({product: product, success: true})
    }
    catch (error) {
        console.error("Error retrieving productsDetails:", error?.message);
        return res.status(500).json({
            message: error?.message || error,
            success: false
        });
    }
}

module.exports = ProductDetails;
