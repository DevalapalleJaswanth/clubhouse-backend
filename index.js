const express = require("express");
const cors = require('cors');
const mongoDB = require('./shared/connect');
const userRouter = require('./routes/user');
const roomRouter = require('./routes/room');



const app = express();
app.use(cors())
mongoDB.ConnectToDB();
app.use(express.json()); // To convert req.body into json format

app.use('/users', userRouter);
app.use('/rooms', roomRouter);


app.listen(process.env.PORT || 8080);