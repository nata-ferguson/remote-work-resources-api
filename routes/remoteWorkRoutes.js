const express = require("express");
const router = express.Router();
const RemoteWorkController = require("../controllers/remoteWorkController");

// GET all remote work options
router.get("/", RemoteWorkController.getAll);

// POST a new remote work option
router.post("/", RemoteWorkController.create);

// PUT to update a remote work option by ID
router.put("/:id", RemoteWorkController.updateById);

// PATCH to partially update a remote work option by ID
router.patch("/:id", RemoteWorkController.partialUpdate);

// DELETE a remote work option by ID
router.delete("/:id", RemoteWorkController.deleteById);

module.exports = router;
