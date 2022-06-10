const {MongoClient} = require("mongodb");
const mysql = require("mysql");
const mongoose = require('mongoose');

exports.ConnectToDB=()=>{ 
  const url = `mongodb+srv://Jaswanth:wEMUbRTFs2z1X5tQ@cluster0.bx8revb.mongodb.net/clubhouse`;
  const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
  mongoose.connect(url,connectionParams)
   .then((result)=>{
    console.log('Database is connected');
   })  
   .catch((err)=>console.log(err));

}