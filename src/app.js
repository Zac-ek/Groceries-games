import express from "express";
import morgan from "morgan";
import Router from "./routes/products.routes.js";
import { config } from "dotenv";
config();
const app=express();
//SETTINGS
app.set('view engine', 'ejs');
//MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use('/street', Router);

export default app;