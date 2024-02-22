import { Router } from "express";
import {getAll,insertOne} from "../controllers/productController.js";
const router=Router();
router.get("/", getAll);
router.post("/",insertOne);
export default router;