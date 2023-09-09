const express = require("express");
const mongoose = require("mongoose");

const app = express();

// routes

app.get("/", (req, res) => {
    res.send("Hello Node API");
});
app.get("/blog", (req, res) => {
    res.send("Hello blog, My name is ...");
});

mongoose
    .connect(
        "mongodb+srv://admin:adminadmin@cluster0.t0a8klp.mongodb.net/Node-API?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("connected to MongoDB");
        app.listen(3000, () => {
            console.log("Node API app is runnung on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });
