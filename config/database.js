const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        UseNewUrlparser: true,
        useUnifiedTopology: true,


    })
        .then(() => console.log("db conncted sucessfully"))
        .catch((error) => {
            console.log("db failed to connect");
            console.error(error.message);
            exit.process(1);
        });
};

module.exports = dbconnect;
