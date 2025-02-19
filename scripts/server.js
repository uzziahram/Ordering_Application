import express from 'express';
import FrontUIrouter from './routes/api/frontUI.js';

const App = express();
const Port = 5000;


App.set('view engine', 'ejs');
App.set('views', 'views');
App.use(express.static('./public'));

App.listen(5000, () => {
    console.log(`App is runing on localhost:${Port}`)
})

App.use('/', FrontUIrouter)

