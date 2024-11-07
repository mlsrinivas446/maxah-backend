const Product = require("../productModel")

//Api to delete product
const DeleteProduct =async ( req, res ) => {
    try {
        const { id } = req.params
        await Product.deleteOne({_id: id})
        res.status(200).json({
            message: "product deleted successfully",
            success: true
        })
    }
    catch (error) {
        console.error("Error delete product:", error?.message);
        return res.status(500).json({
            message: error?.message || error,
            success: false
        });
    }
}

module.exports = DeleteProduct;
