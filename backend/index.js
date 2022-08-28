const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./api/routes/auth');
const usersRoute = require('./api/routes/users');
const hotelsRoute = require('./api/routes/hotels');
const roomsRoute = require('./api/routes/rooms');
dotenv.config();


const connectDB = async() => {

    try {
     await mongoose.connect('mongodb://localhost:27017');
    }catch(e) {
        console.log(e);
    }
}

mongoose.connection.on('disconnected', ()=> {
    console.log('disconnected from db');
})
mongoose.connection.on('connected', ()=> {
    console.log('connected to db');
})

app.use(express.json());
app.use('api/auth', authRoute);
app.use('api/users', usersRoute);
app.use('api/hotels', hotelsRoute);
app.use('api/rooms', roomsRoute);

let PORT = process.env.PORT || 8001;

app.listen(PORT, ()=> {
    connectDB();
    console.log(`listening to ${PORT}`);
})