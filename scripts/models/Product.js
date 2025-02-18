import mongoose from "../db.js";

const productSchema = new mongoose.Schema({
    product_name: String,
    product_category: String,
    product_price: Number,
    product_description: String,
  });


const Product = mongoose.model("Product", productSchema);
export default Product;

