import { CartModel } from "../models/cart-model.js";
import { productRepository } from "./product-repository.js";

class CartRepository {
    constructor(model) {
        this.model = model;
    }

    getAll = async () => {
        try {
            return await this.model.find();
        } catch (error) {
            throw new Error(error);
        }
    };

    getById = async (id) => {
        try {
            return await this.model.findById(id).populate('products', { _id: 0 });
        } catch (error) {
            throw new Error(error);
        }
    };

    create = async (body) => {
        try {
            return await this.model.create(body);
        } catch (error) {
            throw new Error(error);
        }
    };

    update = async (id, body) => {
        try {
            return await this.model.findByIdAndUpdate(id, body, { returnDocument: true });
        } catch (error) {
            throw new Error(error);
        }
    };

    delete = async (id) => {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    };

    addProductToCart = async (cartId, productId) => {
        try {
            const product = await productRepository.getById(productId);
            if (!product) {
                throw new Error("Product not found");
            }
            return await this.model.findByIdAndUpdate(
                cartId, 
                { $push: { products: productId } }, 
                { returnDocument: true });
        } catch (error) {
            throw new Error(error);
        }
}
}

export const cartRepository = new CartRepository(CartModel);