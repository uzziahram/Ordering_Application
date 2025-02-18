import express from 'express';
import FoodStock from '../../models/Stock.js';

const FrontUIrouter = express.Router();

FrontUIrouter.get('/', async (req, res) => {
    try {
        const stockItems = await FoodStock.find();
        console.log(stockItems)
        res.render("main",  {stockItems} )
    } catch (e) {
        console.error(err);
        res.status(500).send("Server Error");
    }
})

export default FrontUIrouter;



