const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((allCategories) => res.json(allCategories))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
    .then((oneCategory) => res.json(oneCategory))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Category.create(req.body)
    .then((newCategory) => res.status((200).json(newCategory)))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((upCategory) => res.status((200).json(upCategory)))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((delCategory) => res.status((200).json(delCategory)))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
