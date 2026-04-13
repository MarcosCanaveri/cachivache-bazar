import { cartRepository } from "../repositorios/cart-repository.js";
import { CustomError } from "../utils/custom-error.js";

class CartController {
    constructor(repository) {
        this.repository = repository;
    }

    getAll = async (_req, res, next) => {
        try {
            const response = await this.repository.getAll();
            res.json(response);
        } catch (error) {
            next(error);
        }
    };


    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.repository.getById(id);
            if (!response) throw new CustomError('Cart not found', 404);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    create = async (req, res, next) => {
        try {
            const response = await this.repository.create(id, req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.repository.update(id, req.body);
            if (!response) throw new CustomError('Cart not found', 404);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await this.repository.delete(id);
            if (!response) throw new CustomError('Cart not found', 404);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    addProductToCart = async (req, res, next) => {
        try {
            const { cartId, productId } = req.params;
            const response = await this.repository.addProductToCart(cartId, productId);
            if (!response) throw new CustomError('Cart not found', 404);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };
}

export const cartController = new CartController(cartRepository);