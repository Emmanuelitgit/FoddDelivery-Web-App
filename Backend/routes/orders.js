import express from "express";
import {addToCart, decreaseQuantity, getOrder, getOrders, increaseQuantity, removeOrder} from "../controllers/order.js";

const router = express.Router();

router.post("/addToCart", addToCart);
router.get("/orders/:user_id", getOrders);
router.get("/order/:id", getOrder);
router.delete("/removeOrder/:id", removeOrder);
router.put("/increaseQuantity/:id", increaseQuantity);
router.put("/decreaseQuantity/:id", decreaseQuantity);

export default router;