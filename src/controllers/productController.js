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
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const updateOne=(req,res)=>{
    console.log(req.body)
    productDao.updateOne(req.params.code, req.body)
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status: "Server unavaliable =/"}));
}
export const shopOne=async(req,res)=>{
    try {
        let product = await productDao.getOne(req.params.code);
        console.log(product)
        product.stock = parseInt(product.stock) - 1;
        console.log(product)
        await productDao.updateOne(req.params.code, product)
        .then(result=>res.redirect('/'))
        .catch(err=>res.json({status: "Server unavaliable =/"}));
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "Error en el servidor" });
    }
}
export const routeHome=(req,res)=>{
    productDao.getAll()
    .then(products=> res.render('../src/views/index',{products}))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));
}
export const routeProducts=(req,res)=>{
    productDao.getAll()
    .then(products=> res.render('../src/views/products',{products}))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));
}
export const routeShop=(req,res)=>{
    productDao.getAll()
    .then(products=> res.render('../src/views/shop',{products}))
    .catch(err=>res.json({
        status: "Server unavaliable"
    }));
}