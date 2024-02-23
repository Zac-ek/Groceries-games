import Product from "../models/products.model.js";
const productDao={};
productDao.getAll=async()=>{
    const products = await Product.find();
    return products;
};
productDao.getOne=async(code)=>{
    const product = await Product.findOne({code: code});
    return product;
};
productDao.insertOne=async(product)=>{
    return await Product.create(product);
};
productDao.updateOne=async(code,product)=>{
    return await Product.findOneAndUpdate({code:code},product);
};
export default productDao;