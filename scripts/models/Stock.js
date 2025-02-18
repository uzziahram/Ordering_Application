import mongoose from "../db.js";

const FoodStock = mongoose.model(
    'Stock', 
    new mongoose.Schema({}, { strict: false }), 
    'Stock'
);

export default FoodStock;
 