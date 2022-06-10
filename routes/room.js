var express = require("express");
var router = express.Router();
var roomModule = require('../module/roomModule');

router.get("/", roomModule.getAllRooms);
router.get('/:id', roomModule.getRoombyID);
router.post('/', roomModule.createRoom);
router.post('/:id', roomModule.updateRoom);
router.delete('/:id', roomModule.deleteRoom);

module.exports = router;