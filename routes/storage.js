const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  deleteItem,
  getItems,
  getItem,
} = require("../controllers/storage");
const { validatorGetteItem } = require("../validators/tracks");
//localhost:3001/storage

router.post("/", uploadMiddleware.single("myfile"), createItem);

router.delete("/", validatorGetteItem, deleteItem);

router.get("/", getItems);

router.get("/:id", validatorGetteItem, getItem);

module.exports = router;
