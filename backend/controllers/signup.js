import user from "../models/user.js";
import { createToken } from "../app.js";
import bcrypt from "bcrypt";

export default async function signup(req, res) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  const obj = { ...req.body, password: hash };
  console.log(obj);
  try {
    const userExists = await user.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (!userExists) {
      const newUser = new user(obj);
      const savedUser = await newUser.save();
      const token = createToken(savedUser._id);
      res.json({ savedUser, token });
    } else {
      res.json("user already exists");
    }
  } catch (err) {
    console.error(err.message, req.body);
    res.json(err.message);
  }
}
