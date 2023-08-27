const express = require("express");
// const fs = require("fs");
const connectMongoDB = require("./connection");
const userRouter = require("./routes/user");
const app = express();
const PORT = 8000;

//MongoDB connection
connectMongoDB().then(() => {
  console.log("MongoDB Connected");
});

// middlewares
app.use(express.json());
app.use("/api/users", userRouter);
// custom middlesware to log user data into a log txt file
// app.use((req, res, next) => {
//   fs.appendFile(
//     "log.txt",
//     `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
//     (err, data) => {
//       next();
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}.`);
});
