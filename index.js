const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://juliabengtsson2:hemligt123@examensarbete.mc7cr.mongodb.net/?retryWrites=true&w=majority&appName=Examensarbete')

const port = 3000
const url = 'localhost'

app.listen(url, port, () => {
    console.log(`listen to ${url}:${port}`)
})