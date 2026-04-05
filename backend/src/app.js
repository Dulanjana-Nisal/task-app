require('dotenv').config();
const dbConnection = require('../db/server');
const errorHaddlerMiddleware = require('../middleware/errorHaddlerMiddlewre');
const userRouters = require('../routers/usersRouter')

//import express
const express = require('express');
const app = express();

//middleware
app.use(express.json());

//routers
app.use('/api/v1', userRouters);

app.get('/api/v1/data', (req,res)=>{
    res.send('Task App')
})

//errors haddler
app.use(errorHaddlerMiddleware);

//connections
const PORT = process.env.PORT || 5001;
const connection = async ()=>{
    try{ 
        await dbConnection(process.env.mongo_URI)
        app.listen(PORT, ()=>{console.log(`Server running from port ${PORT}`)});
    }
    catch(error){
        console.log(error)
    }
}

connection();