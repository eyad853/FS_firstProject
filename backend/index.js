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
    origin:"https://fs-first-projectfrontend.vercel.app"
}))

app.use(express.json())


// routes
app.use("/api/auth" , router)
app.use("/api/todo" , todorouter)







app.listen(8000 , ()=>{
    connect()
    console.log("started");
})