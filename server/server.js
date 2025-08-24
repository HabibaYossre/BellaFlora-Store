const express = require("express");
const mongoose = require('mongoose');

const { connectDB } = require("./DB/connectDB.js");
const authRoutes = require('./routes/authRoutes.js');

const app = express();
const PORT = 3000;

/*****Middelware******/
app.use(express.static('client'))
app.use(express.json());


/***** Routes********/
app.use('/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  connectDB();
});