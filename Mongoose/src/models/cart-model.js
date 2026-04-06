import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    id: { type: String, required: true, unique: true },
    products: [{
        type: Schema.Types.ObjectId, 
        ref: 'Products',
        default: []
    }]
});

export const CartModel = model('carts', CartSchema);