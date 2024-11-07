const Product = require("../productModel")

//Api to post product
const PostProducts = async (req, res) => {
    try {
        const { title, description, price, quantity, category, image, tags } = req.body;

        const product = {
            title,
            description,
            price,
            quantity,
            ...(category ? { category } : {}),
            ...(image ? { image } : {}),
            ...(tags ? { tags } : {})
        };

        await Product.create(product)

        res.status(200).json({
            message: "product added successfully",
            success: true
        })
    } catch (error) {
        console.error("Error creating product:", error?.message);
        return res.status(500).json({
            message: error?.message || error,
            success: false
        });
    }
};

module.exports = PostProducts;
