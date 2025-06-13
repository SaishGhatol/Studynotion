const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 10000,
    })    
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch(error => {
            console.log('Error while connecting server with Database');
            console.log(error);
            process.exit(1);
        });
};