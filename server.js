const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const Space = require("./models").space;

const PORT = 4000;

app.get("/", async (req, res) => {
  const spaces = await Space.findAll();
  console.log(spaces);
  res.send(spaces);
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT} `));
