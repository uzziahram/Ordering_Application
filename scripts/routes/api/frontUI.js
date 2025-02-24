import express from 'express';


const FrontUIrouter = express.Router();

FrontUIrouter.get('/', async (req, res) => {
   
    res.render('main')
})

export default FrontUIrouter;



