const { Router, application } = require("express");
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/", authMiddleware, async (req, res) => {
  const { name, content, imageUrl, spaceId } = req.body;
  const newStory = await Story.create({ name, content, imageUrl, spaceId });
  res.send("Succes! New story was created");
});

router.delete("/:id", async (req, res) => {
  //   console.log("req.params", req.body);
  const { id } = req.params; //request from params
  //   console.log("id", id);
  const storyToDelete = await Story.findByPk(id);
  if (!storyToDelete) {
    res.status(400).send("story not found");
  } else {
    await storyToDelete.destroy();
    res.status(200).send({ message: `Item with ${id} was deleted` });
  }
});

module.exports = router;
