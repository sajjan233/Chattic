import express from 'express';
import mongoose from 'mongoose';
import { } from 'dotenv/config'
import path from 'path';
import router from './src/routes/index.js';
let dir = path.dirname('')
const app = express()
app.use(express.json())
const { MONGODB_PROD, MONGODB_STAGING, PORT, NODE_ENV } = process.env
let mongodbUrl = NODE_ENV == 'Production' ? MONGODB_PROD : MONGODB_STAGING;


mongoose.connect(mongodbUrl, {

}).then(() => {
    console.log("connect mongodb");
}).catch((err) => {
    console.log("mongodb_connection_err", err);

})

app.use('/', router)
app.use('public', express.static(dir + '/public'));
app.use(express.static(path.join(dir, './client/build')));

app.listen(PORT, () => {
    console.log("server run");
})