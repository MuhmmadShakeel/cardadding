import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import cardRouter from './Router/CardRouter.js';
const router=express.Router();
const PORT=8000;
const app=express();
mongoose.connect("mongodb://localhost:27017/mytestdb")
.then(()=>{console.log("connected to the database")})
.catch((err)=>{console.log("error in connecting the database",err)})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/",cardRouter)
app.listen(PORT,()=>{console.log("the server is running on the port",PORT)})
