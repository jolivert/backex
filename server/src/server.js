const express = require('express');
const cors =require('cors');
const morgan= require('morgan');

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get("/",async (req,res)=> {



})

app.listen(8888,()=>{
    console.log('port 8888')
})