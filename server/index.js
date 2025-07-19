import express from 'express';
const app = express()
import path from 'path';
let dir = path.dirname('')

app.use('public', express.static(dir + '/public'));
app.use(express.static(path.join(dir, './client/build')));


app.listen(5000,() => {
    console.log("server run");  
})