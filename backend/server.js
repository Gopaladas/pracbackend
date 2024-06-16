const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/user',require('./routes/userRoutes'))

app.listen(port,()=>console.log(`Server running successfully at port ${port}`));