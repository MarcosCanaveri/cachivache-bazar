import { Router } from "express";
import { cartController } from "../controllers/cart-controller";

const router = Router();

router.put('/carts/:id', cartController.update);
router.put('/add/:cartId/product/:productId', cartController.addProductToCart);
router.delete('/carts/:id/products/:productId', cartController.delete);
router.delete('/carts/:id', cartController.delete);
router.get('/carts/:id', cartController.getById);
router.post('/carts', cartController.create);

export default router;