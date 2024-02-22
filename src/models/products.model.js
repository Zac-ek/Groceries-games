import { Schema,model } from "mongoose";
const productSchema= new Schema({
    code:{
        type: String,
        unique: true,
        required: true
    },
    name: String,
    brand: String,
    price: Number,
    stock: Number,
    type: String,
    status: Number
},{
    versionKey: false,
    timestamps: true
});

export default model('product',productSchema);