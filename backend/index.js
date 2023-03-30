const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const bugsRouter = require("./Routes/bugs.routes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", UserRouter);
app.use("/bugs", bugsRouter);

app.use("/", (req, res) => {
  res.send("Hello, This is the backend for Bug Tracker");
});

app.listen(process.env.PORT || 8080, async () => {
  await dbConnect();
  console.log("Stared at http://localhost:8080");
});



