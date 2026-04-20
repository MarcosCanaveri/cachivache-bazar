import { Router } from "express";
import { cartController } from "../controllers/cart-controller.js";

const router = Router();

router.get("/", cartController.getAll);
router.get("/:cid", cartController.getById);
router.post("/", cartController.create);
router.put("/:cid", cartController.update);
router.delete("/:cid", cartController.delete);
router.post("/add/:cid/product/:pid", cartController.addProductToCart);
router.post("/remove/:cid/product/:pid", cartController.deleteProductFromCart);

export default router;