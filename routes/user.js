var express = require("express");
var router = express.Router();
var userModule = require('../module/userModule');

router.get("/", userModule.getAllUsers);
router.get('/:id', userModule.getUserbyID);
router.post('/', userModule.createUser);
router.post('/login/', userModule.checkUser);
router.post('/:id', userModule.updateUser);
router.delete('/:id', userModule.deleteUser);


module.exports = router;