require('dotenv').config();

const express = require('express');
const app = express();

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