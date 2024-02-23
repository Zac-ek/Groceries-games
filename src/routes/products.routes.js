import { Router } from "express";
import {getAll,insertOne,getOne,updateOne} from "../controllers/productController.js";
const router=Router();
router.get("/", getAll);
router.get("/:code", getOne);
router.post("/",insertOne);
router.post("/:code",updateOne);
export default router;