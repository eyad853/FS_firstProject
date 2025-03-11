import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/Auth.js';
import todorouter from './routes/makeTodo.js';

dotenv.config()
const app =express()

const connect = async ()=>{
    try{
       await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("dataBase connected");
    }catch(err){
        console.log("connection disconnected");
    }
}


app.use(cors({
    origin:"https://fs-first-projectfrontend.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials:true,
}))

// Extra middleware to confirm headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://fs-first-projectfrontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json())


// routes
app.use("/api/auth" , router)
app.use("/api/todo" , todorouter)







app.listen(8000 , ()=>{
    connect()
    console.log("started");
})