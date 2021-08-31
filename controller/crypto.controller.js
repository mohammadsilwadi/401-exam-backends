const axios = require('axios');
const crypto=require('../model/crypto.model');
const seedcoll=(req,res)=>{
    const mohammad= new crypto({

      title:  'Ethereum', 
      description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality.',
      image_url:   'https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg',
      id: 1,
      toUSD:  '3,288.49'

    })
    mohammad.save()
    res.send(mohammad)
    console.log(mohammad)
}
const getCrypto=(req,res)=>{
const url ='https://crypto-explorer.herokuapp.com/crypto-list/'
axios.get(url).then(resa=>res.send(resa.data))
.catch(error=>console.log(error))
}
const addFavCrypto =(req,res)=>{
const {title,description,image_url,id,toUSD,email}=req.body;
const newCrypto= new crypto({
    title:  title, 
    description: description,
    image_url:    image_url,
    id: id,
    toUSD:  toUSD,
    email:email
});
newCrypto.save()
}
const deleteCrypto = (req,res)=>{
const id = req.params.id;
crypto.deleteOne({_id:id},
(error,data)=>{res.send(data)})
}

module.exports={seedcoll,getCrypto,addFavCrypto,deleteCrypto}