const mongoose =require("mongoose");
const cryptoSchema = new mongoose.Schema({
  title:  String, 
  description: String,
  image_url:   String,
  id: Number,
  toUSD:  String
  });
  const crypto=mongoose.model('crypto',cryptoSchema)
  module.exports=crypto