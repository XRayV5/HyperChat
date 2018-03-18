const express = require("express");
const path = require("path");
const port = process.env.PORT || 3080;
const app = express();
const CONTENT_DIR = `${__dirname}/public`;

app.use(express.static(CONTENT_DIR));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(CONTENT_DIR, "index.html"));
});

app.listen(port, () => {
  console.log("Static Server listening on PORT", port);
});
