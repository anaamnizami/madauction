const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const catroutes = require('./routes/categories');

dotenv.config()
//connect to db

mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser: true},
()=>{
  console.log('connected db')
})



app.use(express.json());

app.use('/api/user', authRoutes)
app.use('/api/cat',catroutes)


app.listen(4000,()=>{
  console.log('listenining on port')
})
