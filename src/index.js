const express = require('express');
require('./db/mongoose');
const userRouter = require('./Router/user');
const taskRouter = require('./Router/task');

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  next();
});

//middleware
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`server is up on port ${port}`));
