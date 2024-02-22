import productDao from "../dao/products.dao.js";
export const getAll=(req,res)=>{
    productDao.getAll()
    .then(products=> res.render('../src/views/index',{products}))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));  
};
export const insertOne=(req,res)=>{
    console.log(req.body)
    productDao.insertOne(req.body)
    .then(result=>res.redirect('/street/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}