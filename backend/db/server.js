const mongoose = require('mongoose');

const dbConnection = async (url)=>{
    await mongoose
        .connect(url)
        .then(()=>{console.log('Database connected!')})
        .catch((err)=>{console.log(err)})
}

module.exports = dbConnection;