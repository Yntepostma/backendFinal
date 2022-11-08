const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  const spacesWithStories = await Space.findAll({
    include: [Story],
    order: [[{ model: Story }, "createdAt", "DESC"]],
  });
  res.json(spacesWithStories);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const spaceToUpdate = await Space.findByPk(id);
  console.log("space", spaceToUpdate);
  const updatedSPace = await spaceToUpdate.update(req.body);
  res.send(updatedSPace);
});

module.exports = router;
