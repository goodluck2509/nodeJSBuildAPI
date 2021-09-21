const express = require('express');

const app = express();

//ROUTES

app.get('/', (req, res) => {
   res.send('Hello world');
})

//How to we start listening to te server
app.listen(3001);