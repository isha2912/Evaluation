const express = require('express');
const dotenv = require('dotenv');
const { healthRouter, shopRouter } = require('./routes/index.js');



const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/health', healthRouter);
app.use('/shop', shopRouter);




app.listen(port, () => {
    console.log(`Server is up at ${port}`);
})