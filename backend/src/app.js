require('dotenv').config();

//import express
const express = require('express');
const app = express();

app.get('/api/v1/data', (req,res)=>{
    res.send('Task App')
})

//connections
const PORT = process.env.PORT || 5001;
const connection = async ()=>{
    try{
        app.listen(PORT, ()=>{console.log(`Server running from port ${PORT}`)});
    }
    catch(error){
        console.log(error)
    }
}

connection();