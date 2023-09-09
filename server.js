const express = require('express');

const app = express();

// routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})
app.get('/post', (req, res) => {
    res.send('Hello Node API post')
})

app.listen(3000, () => {
    console.log('Node API app is runnung on port 3000');

});