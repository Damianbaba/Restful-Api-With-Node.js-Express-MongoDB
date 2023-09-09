const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/productModel');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
    res.send("Hello Node API"); cle
});

app.get("/blog", (req, res) => {
    res.send("Hello blog, My name is ...");
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch {
        (error)
        res.status(500).json({ message: error.message })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// UPDATE Product IN DATABASE

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if (!product) {
            return res.status(404).json({ message: `cannot find any product with id ${id}` })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

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
