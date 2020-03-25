const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//middlewares

app.use(cors());
app.use(express.json());

//routes
app.use(routes);


app.listen(3333);