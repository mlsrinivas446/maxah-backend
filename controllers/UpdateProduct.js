const Product = require("../productModel")

//Api to update product details based on productId
const UpdateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { title, description, price, quantity, category, image, tags } = req.body;

        const updatedProduct = {
            ...(title && { title }),
            ...(description && { description }),
            ...(price && { price }),
            ...(quantity && { quantity }),
            ...(category && { category }),
            ...(image && { image }),
            ...(tags && { tags })
        };

        await Product.updateOne({ _id: productId }, { $set: updatedProduct })

        res.status(200).json({
            message: "product updated successfully",
            success: true
        })
    } catch (error) {
        console.error("Error updating product:", error?.message);
        return res.status(500).json({
            message: error?.message || error,
            success: false
        });
    }
};

module.exports = UpdateProduct;
