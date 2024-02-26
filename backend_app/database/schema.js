require('dotenv').config();

const mongoose = require("mongoose")



exports.connect = () => {

    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to database,",process.env.MONGO_URI)
    })
    .catch((error) => {
        console.log("Database connection failed. Exiting now...")
        console.error(error)
        process.exit(1)
    })
}