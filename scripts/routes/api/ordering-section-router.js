import express from 'express'
import { connectionToApi } from '../../db.js';

const Ordering_section = express.Router();

Ordering_section.get('/',async (req, res) => {

    try {
        const importedStocks = await connectionToApi();
        res.render('ordering-section', { importedStocks })
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})

export default Ordering_section;










