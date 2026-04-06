import { CartModel } from "../models/cart-model.js";

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
            return await this.model.findById(id).populate('products');
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

addProductToCart = async (cartId, productId, quantity) => {
    try {
        const cart = await this.model.findById(cartId);
        if (!cart) {
            throw new Error(`Cart with id ${cartId} not found`);
        }
        return await this.model.findByIdAndUpdate(
            cartId,
            { $push: { products: { product: productId, quantity } } },
            { returnDocument: true }
        );
    } catch (error) {
        throw new Error(`Error adding product to cart: ${error.message}`);
    }
};
}

export const cartRepository = new CartRepository(CartModel);