const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mainRoute = require("./routes");
const cors = require("cors");
const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/testproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

  app.use(cors());
  app.use(express.json());
  app.use("/", mainRoute);


app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
