import express from "express";
import {addToCart, getOrder, getOrders, increaseQuantity, removeOrder} from "../controllers/order.js";

const router = express.Router();

router.post("/addToCart", addToCart);
router.get("/orders/:user_id", getOrders);
router.get("/order/:id", getOrder);
router.delete("/removeOrder/:id", removeOrder);
router.put("/increaseQuantity/:id", increaseQuantity);

export default router;