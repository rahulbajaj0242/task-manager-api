const express = require('express');
require('./db/mongoose');
const userRouter = require('./Router/user');
const taskRouter = require('./Router/task');

const app = express();

//middleware
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
