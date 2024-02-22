import Product from "../models/products.model.js";
const productDao={};
productDao.getAll=async()=>{
    const products = await Product.find();
    return products;
};
productDao.insertOne=async(product)=>{
    return await Product.create(product);
};
export default productDao;