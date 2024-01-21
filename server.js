const express = require('express');

const app = express();

require("dotenv").config();

app.use(express.json());

const todoroutes = require("./routes/todos");

app.use("/api/v1", todoroutes);

app.listen(process.env.PORT || 4000, () => {
    console.log("server started sucessfully");
});

const dbconnect = require("./config/database");
dbconnect();

