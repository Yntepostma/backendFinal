const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { response } = require("express");

const Space = require("./models").space;

const spaceRouter = require("./routers/spaces");
const authRouter = require("./routers/auth");

app.use("/spaces", spaceRouter);
app.use("/auth", authRouter);

const PORT = 4000;

app.get("/", async (req, res) => {
  const spaces = await Space.findAll();
  console.log(spaces);
  res.send(spaces);
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT} `));
