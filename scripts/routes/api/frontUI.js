import express from 'express';
import { connectionToApi } from '../../db.js';

const FrontUIrouter = express.Router();

FrontUIrouter.get('/', async (req, res) => {
    const importedStocks = await connectionToApi();
    res.render('main',{ importedStocks })
})

export default FrontUIrouter;



