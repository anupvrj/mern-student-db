const express = require('express');

const helloRouter = express.Router();

helloRouter.get('/',(req,res)=>{
res.status(200).send({message:"This message from Server"});
});


module.exports = helloRouter;