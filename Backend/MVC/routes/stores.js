const express = require("express");
const {
  addNewStore,
  getStoreById,
  updateStoreById,
  deleteStoreById,
} = require("../controllers/stores");
const storesRouter = express.Router();

//===============
storesRouter.post("/addnewstore", addNewStore);
storesRouter.get("/:id", getStoreById);
storesRouter.put("/:id/update", updateStoreById);
storesRouter.delete("/:id", deleteStoreById);
//===============

module.exports = storesRouter;
