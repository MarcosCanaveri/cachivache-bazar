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

    getById = async (cid) => {
        try {
            return await this.model.findById(cid).populate('products', { _id: 0 });
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

    update = async (cid, body) => {
        try {
            return await this.model.findByIdAndUpdate(cid, body, { returnDocument: true });
        } catch (error) {
            throw new Error(error);
        }
    };

    delete = async (cid) => {
        try {
            return await this.model.findByIdAndDelete(cid);
        } catch (error) {
            throw new Error(error);
        }
    };

    addProductToCart = async (cid, pid) => {
        try {
            const product = await productRepository.getById(pid);
            if (!product) {
                throw new Error("Product not found");
            }
            return await this.model.findByIdAndUpdate(
                cid, 
                { $push: { products: pid } }, 
                { returnDocument: true });
        } catch (error) {
            throw new Error(error);
        }
}

    deleteProductFromCart = async (cid, pid) => {
        try {
            const product = await productRepository.getById(pid);
            if (!product) {
                throw new Error("Product not found");
            }
            return await this.model.findByIdAndUpdate(
                cid,
                { $pull: { products: pid } },
                { returnDocument: true }
            );
        } catch (error) {
            throw new Error(error);
        }
    }
    };

export const cartRepository = new CartRepository(CartModel);