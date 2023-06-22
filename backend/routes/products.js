import {AddProduct} from "../controller/Product.js"
import express from "express";
const router = express.Router();



router.post("/",AddProduct);
export default router