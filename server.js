const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const PORT=process.env.PORT||8000
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true,  useUnifiedTopology: true});

const {seedcoll,getCrypto,addFavCrypto,deleteCrypto}=require('./controller/crypto.controller')

app.get('/',(req,res)=>{res.send('hi')
})
app.get('/add',seedcoll)
app.get('/get',getCrypto)
app.post('/addfav',addFavCrypto)
app.delete('/del/:id',deleteCrypto)
app.listen(PORT,()=>console.log(`listening on port:${PORT}`))