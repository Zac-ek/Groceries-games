import { Router } from "express";
import {getAll,insertOne,getOne,updateOne,shopOne} from "../controllers/productController.js";
const router=Router();
router.get("/", getAll);
router.get("/:code", getOne);
router.post("/sh/:code",shopOne);
router.post("/",insertOne);
router.post("/:code",updateOne);
export default router;