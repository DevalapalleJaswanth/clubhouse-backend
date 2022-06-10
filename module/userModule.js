const {User}= require('../Schema/userSchema');
const {ObjectId} = require("bson");
const bcrypt = require("bcrypt");



exports. getAllUsers=(req,res)=>{
  User.find().sort({cteatedAt:-1})
  .then(result=>{      
      res.status(200).send(result);
  })
  .catch(err=>{
      res.status(400).send(`Thers is an error in the server while loading users data: ${err}` );
  })
}

exports.checkUser= async (req,res) =>{
    // const schema = Joi.object({
    //     mail: Joi.string().email().max(50).required(),
    //     password: Joi.string().min(5).max(15).required()
    // })
     
    // // Input data validation
    // const {error} = await schema.validate(req.body);
    // if (error) return res.status(400).send({msg : error.details[0].message});
   
    let user= await User.findOne({mail : req.body.mail});  
    if(!user) return res.status(400).send({msg : "User is not registered"});
    const match = await bcrypt.compare(req.body.password, user.password);  
    if(!match) return res.status(400).send({msg : "Password didn't match"});
    res.status(200).send(user);
}



exports.getUserbyID = (req, res) => {
  const id = req.params.id;
  User.findById(id)
      .then(result => {          
          res.status(200).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}



exports.createUser  = async (req, res) => {
  const salt =  await bcrypt.genSalt(5);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const user = new User(req.body);
  user.save()
      .then(result => {
          res.status(201).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}

exports.updateUser= async (req, res) => {
  const salt = await bcrypt.genSalt(5);  
  req.body.password = await bcrypt.hash(req.body.password, salt);
  User.updateOne({_id: ObjectId(req.params.id)}, {$set: {name: req.body.name, password: req.body.password,mail:req.body.mail}})
  .then(result=>{
    res.status(200).send(result);
    })
  .catch(err => {
    res.status(400).send(err);
});
  
}
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
      .then(result => {
          res.status(200).send(result);
      })
      .catch(err => {
          res.status(400).send(err);
      });
}