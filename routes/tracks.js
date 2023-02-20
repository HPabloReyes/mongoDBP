const express = require("express");
const router = express.Router();
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetteItem,
} = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

// Devuelve todos los items de la DB
router.get("/", getItems);
// Devuelve el detalle de un item de la DB
router.get("/:id", validatorGetteItem, getItem);
// Agrega un item a la DB
router.post("/", validatorCreateItem, createItem);
// Actualiza un item en la DB
router.put("/:id", validatorGetteItem, validatorCreateItem, updateItems);
// Eliminar un item de la DB
router.delete("/:id", validatorGetteItem, deleteItems);

module.exports = router;
