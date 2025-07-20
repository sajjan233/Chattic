import express from 'express';
import mongoose from 'mongoose';
import {} from 'dotenv/config'
const app = express()
const {MONGODB} = process.env
console.log(MONGODB);

mongoose.connect('mongodb+srv://sajjankumarhsr23:sajjankumarhsr23@personal.nlb6rsv.mongodb.net/?retryWrites=true&w=majority&appName=personal').then((E) => {
    console.log("connect mongodb");
}).catch((err) => {
    console.log("mongodb_connection_err",err);
    
})




app.listen(5000,() => {
    console.log("server run");
    
})