import express from 'express'
import mongoose from 'mongoose';

const App = express();
const Port = 5000;

App.set('view engine', 'ejs');
App.set('views', 'views');
App.use(express.static('./public'));

mongoose.connect('mongodb+srv://uzziahgenella:th6jBkfA4yXvk3Vs@cluster0.v7yuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB:', err));





App.get('/', (req, res) => {
    res.render('main');
})















App.listen(5000, () => {
    console.log(`App is runing on localhost:${Port}`)
})