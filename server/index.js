import express from 'express';
import mongoose from 'mongoose';
import {} from 'dotenv/config'
import path from 'path';
let dir = path.dirname('')
const app = express()
const {MONGODB} = process.env


mongoose.connect(MONGODB,{
    
}).then(() => {
    console.log("connect mongodb");
}).catch((err) => {
    console.log("mongodb_connection_err",err);
    
})

app.use('public', express.static(dir + '/public'));
app.use(express.static(path.join(dir, './client/build')));


app.listen(5000,() => {
    console.log("server run");  
})