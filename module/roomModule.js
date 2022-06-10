const {Room}= require('../Schema/roomSchema');
const {ObjectId} = require("bson");

exports.getAllRooms=(req,res)=>{
  Room.find()
  .then(result=>{
      res.status(200).send(result);
  })
  .catch(err=>{
      res.status(400).send(`There is an error in the server while loading romss data: ${err}` );
  })
}

exports.getRoombyID = (req, res) => {
  const id = req.params.id;
  Room.findById(id)
      .then(result => {
          res.status(200).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}

exports.createRoom  = (req, res) => {
  const room = new Room(req.body);
  room.save()
      .then(result => {
          res.status(201).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}

exports.updateRoom=(req, res) => {  
  
  Room.updateOne({_id: ObjectId(req.params.id)}, {$set: {name: req.body.name, creatorID: req.body.creatorID, members: req.body.members, chatMessages: req.body.chatMessages}})
  .then(result=>{
    res.status(200).send(result);
    })
  .catch(err => {
    res.status(400).send(err);
});
  
}
exports.deleteRoom = (req, res) => {
  const id = req.params.id;
  Room.findByIdAndDelete(id)
      .then(result => {
          res.status(200).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}