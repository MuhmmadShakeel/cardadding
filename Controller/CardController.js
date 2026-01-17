import Card from '../Modal/CardModal.js'
import User from '../Modal/UserModel.js'
import { createToken } from '../Services/Authentic.js';
import { hashedPassword , comparePassword } from '../Modal/UserModel.js';
export const POST = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file ? req.file.filename : null;
   
    await Card.create({
      cardImage: imagePath,
      cardTitle: title,
      content: description
    });

    return res.redirect("/card/GetData");

  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating card");
  }
};



export const GetDate = async (req, res) => {
  try {
    const CardData = await Card.find({}); // ✅ await added

    return res.render('GetData', {
      CardData
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};



export const SignUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    const hashPassword = await hashedPassword(password);

    await User.create({
      fullname,
      email,
      password: hashPassword
    });

    return res.render("Login");

  } catch (error) {
    console.error(error);
    res.status(500).send("Signup failed");
  }
};


export const Login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (!findUser) return res.send("User not found");

  const isPasswordValid = await comparePassword(
    password,
    findUser.password
  );
  if (!isPasswordValid) return res.send("Invalid password");

  const token = createToken(findUser);

  res
    .cookie("token", token, { httpOnly: true })
    .redirect("/card");
};

