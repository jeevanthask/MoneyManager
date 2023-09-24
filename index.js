const express = require("express");
const app = express();
const port = process.env.PORT | 3000;

app.use("/", (req, res, next) => {
  res.send("404 Error Page");
});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
