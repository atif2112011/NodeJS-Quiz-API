const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/db");
const port = process.env.port || 5000;
const app = express();
const Quiz_Route = require("./routes/Quiz_Route");
const Quiz = require("./models/Quiz_Model");
const path = require("path");
const AddQuestions = require("./Sampledata");

//Middlewares
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(Quiz_Route);

app.use("/", express.static(path.join(__dirname, "/client")));

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

app.get("/check-get", (req, res) => {
  res.send({
    status: "success",
    message: "Server is running successfully",
  });
});

app.post("/check-post", async (req, res) => {
  console.log(req.body);
  console.log("hi");
  res.send(req.body);
});

app.get("/add-sample-question", async (req, res) => {
  await AddQuestions();
  res.send({
    status: true,
    message: "Sample Questions Populated",
  });
});

startServer();
