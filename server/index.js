import express from 'express';
import mongoose from 'mongoose';
import { } from 'dotenv/config'
import path from 'path';
import router from './src/routes/index.js';
let dir = path.dirname('')


import { fileURLToPath } from 'url';

// Required to use __dirname with ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from server folder
dotenv.config({
  path: path.resolve(__dirname, '.env')
});








const app = express()
app.use(express.json())
const { MONGODB_PROD, MONGODB_STAGING, PORT, NODE_ENV } = process.env
let mongodbUrl = NODE_ENV == 'Production' ? MONGODB_PROD : MONGODB_STAGING;
console.log(process.env);

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
