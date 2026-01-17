import express from 'express';
const cardRouter = express.Router();
import {POST,GetDate,SignUp,Login} from "../Controller/CardController.js"
import { checkvalidation } from "../Controller/Middleware/Authentication.js";
import { adminOnly } from '../Controller/Middleware/Authentication.js';
import multer from "multer";
import path from "path";
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
cardRouter.get('/getform',(req,res)=>{
  return res.render('SingUp')
})
cardRouter.get("/card/GetData", checkvalidation("token"),adminOnly,GetDate);
cardRouter.post('/signup',SignUp)
cardRouter.post("/login",Login)
export default cardRouter;
