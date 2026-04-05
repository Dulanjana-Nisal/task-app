require('dotenv').config();
const userRouters = require('../routers/usersRouter')

//import express
const express = require('express');
const app = express();

//routers
app.use('/api/v1', userRouters);

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