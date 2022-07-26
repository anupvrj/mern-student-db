const express = require('express');
const bodyParser =require('body-parser');
const dotenv = require('dotenv');
const helloRouter = require('./routes/helloRouter');
const cors =require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1/hello',helloRouter);

app.listen(4040,()=>console.log("Server is running"));
