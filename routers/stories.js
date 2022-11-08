const { Router, application } = require("express");
const Story = require("../models").story;

const router = new Router();

router.post("/", async (req, res) => {
  const { name, content, imageUrl, spaceId } = req.body;
  const newStory = await Story.create({ name, content, imageUrl, spaceId });
  res.send(newStory);
});

router.delete("/", async (req, res) => {
  console.log("req.params", req.body);
  const { id } = req.body;

  const storyToDelete = await Story.findByPk(id);
  if (!storyToDelete) {
    res.status(400).send("story not found");
  } else {
    await storyToDelete.destroy();
    res.sendStatus(200);
  }
});

module.exports = router;
