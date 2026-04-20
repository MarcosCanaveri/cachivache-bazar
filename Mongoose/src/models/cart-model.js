import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    products: [
        {
            product: {
            type: Schema.Types.ObjectId,
            ref: 'products',
            default: [],
            },
            quantity: { type: Number, default: 1 }
        }
    ]
});

export const CartModel = model('carts', CartSchema);