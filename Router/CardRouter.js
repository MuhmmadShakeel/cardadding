import express from 'express';
const cardRouter = express.Router();
import {POST} from "../Controller/CardController.js"
import multer from "multer";
import path from "path";
import Card from '../Modal/CardModal.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage })

cardRouter.post("/card/post",upload.single("image"),POST)
cardRouter.get("/card",(req,res)=>{
  return res.render('Card')
})
cardRouter.post("/postdata",(req,res)=>{
})





export default cardRouter;
