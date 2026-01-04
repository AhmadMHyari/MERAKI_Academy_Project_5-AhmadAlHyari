const express = require("express");
const {
  addNewStore,
  getStoreById,
  updateStoreById,
  deleteStoreById,
  getAllStores,
  getProductsInStore,
  addNewProductInStore,
  getAllDoneOrdersForStoreById,
  getStoreStatistic,
  getRevenueChart,
  getOrders,
  getOrderDetails,
} = require("../controllers/stores");
const storesRouter = express.Router();

//===============

storesRouter.get("/all", getAllStores);
storesRouter.post("/addnewstore", addNewStore);
storesRouter.post("/addnewproductinstore", addNewProductInStore);
storesRouter.get('/order-details/:order_id', getOrderDetails);


storesRouter.get("/:id/productsinstore", getProductsInStore);
storesRouter.get("/:id/statistic", getStoreStatistic);
storesRouter.get("/:id/last-seven-days-chart", getRevenueChart);
storesRouter.get("/:id/orders", getOrders);
storesRouter.get("/:id/total-sales", getAllDoneOrdersForStoreById);
storesRouter.get("/:id", getStoreById);
storesRouter.put("/:id/update", updateStoreById);
storesRouter.delete("/:id", deleteStoreById);
//===============

module.exports = storesRouter;
