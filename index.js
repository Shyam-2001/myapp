const express = require("express"); // to create the server
const mongoose = require("mongoose"); // to use the mongo db database
const cors = require("cors");
const app = express(); // now in app will have all the properties of express
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://shyamgupta:shyamgupta25@cluster0.uncqf.mongodb.net/services?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is runing");
});


app.get("/", (req, res)=>{
  res.json("hello start")
})

app.use(express.static(path.join(__dirname, "my-app/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./my-app/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});