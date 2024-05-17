import express from 'express';
import mongoose from 'mongoose';
import router from './routes/auth.routes.js';

const DB = 'mongodb+srv://user:user@cluster0.kywrbsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(express.json());

app.use('/auth', router);

const startApp = async () =>{
    try{
        await mongoose.connect(DB);
        app.listen(PORT, () => console.log(`SERVER START on port ${PORT}!`))

    } catch(e){
        console.log(e.message);
    }
}

startApp();