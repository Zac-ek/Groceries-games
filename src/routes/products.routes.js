import { Router } from "express";
import {getAll,insertOne,getOne,updateOne,shopOne,routeHome,routeShop,routeProducts} from "../controllers/productController.js";
const router=Router();
router.get("/", routeHome);
router.get("/products", routeProducts);
router.get("/shop", routeShop);
router.get("/:code", getOne);
router.post("/sh/:code",shopOne);
router.post("/",insertOne);
router.post("/:code",updateOne);
export default router;