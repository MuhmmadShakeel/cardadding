import jwt from "jsonwebtoken";

const secret = "@thingsgetcommon";

export const createToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role, 
  };

  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const validateToken = (token) => {
  return jwt.verify(token, secret);
};
