const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const postsRoute = require('./routes/posts');

require('dotenv/config');
const app = express(); 

app.use(cors());
app.use(bodyparser.json());

mongoose.connect(process.env.Db_connection, ()=>{
    console.log('MongoDB Connected suckaas!!!');
});

app.use('/posts', postsRoute);



app.get('/', (req, res)=>{
    res.send('We are on port 3000 suckaaas !!!! ');
});



app.listen(5000);