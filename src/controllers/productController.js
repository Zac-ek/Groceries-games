import productDao from "../dao/products.dao.js";
export const getAll=(req,res)=>{
    productDao.getAll()
    .then(products=> res.render('../src/views/index',{products}))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));  
};
export const getOne=(req,res)=>{
    productDao.getOne(req.params.code)
    .then(product=>{
        !product ? res.json({
            message: "product not found"
        }) : res.render('../src/views/edit',{product});
    })
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));
}
export const insertOne=(req,res)=>{
    console.log(req.body)
    productDao.insertOne(req.body)
    .then(result=>res.redirect('/street/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const updateOne=(req,res)=>{
    console.log(req.body)
    productDao.updateOne(req.params.code, req.body)
    .then(result=>res.redirect('/street/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}