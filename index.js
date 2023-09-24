const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const cors = require("cors");
const categoryRouter = require("./routes/categoryRoute");

app.use(express.json());
app.use(cors());

app.use("/api/", categoryRouter);

app.use("/", (req, res, next) => {
  res.send("404 Error Page");
});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
