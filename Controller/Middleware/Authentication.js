import { validateToken } from "../../Services/Authentic.js";
export const checkvalidation=(cookiename)=>{
    return (req,res,next)=>{
        const token=req.cookies[cookiename]
          if(!token){
        req.user=null;
        console.log("the user before asigned",req.user)
       return next();
 }
    try {
      const userpayload=validateToken(token);
    req.user=userpayload;
     console.log("the user before asigned",req.user)
    } catch (error) {
    req.user=null;  
    }
    next()
    }
}
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied: Admin only");
  }
  next();
};

