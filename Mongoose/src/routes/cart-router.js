import { Router } from "express";
import { cartController } from "../controllers/cart-controller.js";

const router = Router();

router.get("/", cartController.getAll);
router.get("/:cid", cartController.getById);
router.post("/", cartController.create);
router.put("/:cid", cartController.update);
router.delete("/remove/:cid", cartController.delete);
router.post("/add/:cid/products/:pid", cartController.addProductToCart);
router.delete("/:cid/products/:pid", cartController.deleteProductFromCart);
router.delete("/:cid", cartController.deleteAllProductsFromCart);
router.put("/:cid/products/:pid", cartController.updateProductQuantityInCart);
router.put("/:cid", cartController.updateCartProducts);

export default router;