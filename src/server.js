import express from 'express';
import configViewEngine from './configs/viewEngine';
import connectDB from './configs/connectDB';
import initWebRoute from './route/web';


const app = express();
const port = 8080
console.log('nghia');
//set up view engine 
configViewEngine(app);

//init web route 
initWebRoute(app);

connectDB();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

