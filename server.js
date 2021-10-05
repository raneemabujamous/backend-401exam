const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors()); // after you initialize your express app instance
require("dotenv").config();
const axios = require("axios"); // require the package
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://raneem:0000@cluster0-shard-00-00.ivvf0.mongodb.net:27017,cluster0-shard-00-01.ivvf0.mongodb.net:27017,cluster0-shard-00-02.ivvf0.mongodb.net:27017/exam401data?ssl=true&replicaSet=atlas-khqokz-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const PORT = process.env.PORT;
const { apiData } = require("./controllers/apiCont");
const {
  postMethos,
  getPostexam,
  deleteMethos,
  updateMehtod,
} = require("./controllers/Curd");
app.get("/apiexam", apiData);
app.post("/postexam", postMethos);
app.get("/getpostexam", getPostexam);
app.delete("/deleteexam:slug", deleteMethos);
app.put("/updateexam:slug", updateMehtod);
app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("test");
});
