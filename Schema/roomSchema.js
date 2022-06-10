const mongoose =require("mongoose");
const Schema=mongoose.Schema;


const roomSchema=new Schema(
  {
    name:{type: String, required:true},
    creatorID:{type: String, required:true},
    members:{type: Array, required:false},
    chatMessages:{type: Array, required:false}
  }
)

const Room=mongoose.model('rooms',roomSchema);
module.exports={Room};