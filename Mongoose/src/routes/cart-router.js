import { Router } from "express";
import { cartController } from "../controllers/cart-controller.js";

const router = Router();

router.get("/", cartController.getAll);
router.get("/:id", cartController.getById);
router.post("/", cartController.create);
router.put("/:id", cartController.update);
router.delete("/:id", cartController.delete);
router.post("/add/:cartId/product/:productId", cartController.addProductToCart);

export default router;