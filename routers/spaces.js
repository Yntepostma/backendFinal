const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res, next) => {
  const spacesWithStories = await Space.findAll({
    include: [Story],
    order: [[{ model: Story }, "createdAt", "DESC"]],
  });
  res.json(spacesWithStories);
});

module.exports = router;
