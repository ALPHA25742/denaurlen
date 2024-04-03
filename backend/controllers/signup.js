import user from "../models/user.js";
import { createToken } from "../app.js";
import bcrypt from "bcrypt";

export default async function signup(req, res) {
  if (req.body.password == undefined) {
    return res.json("messed up");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  const obj = { ...req.body, password: hash };
  try {
    const newUser = new user(obj);
    const savedUser = await newUser.save();
    const token = createToken(savedUser._id);
    res.json({ savedUser, token });
  } catch (err) {
    console.error(err.message, req.body);
    res.json(err.message);
  }
}

export async function check(req, res) {
  try {
    const userExists = await user.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (!userExists) {
      res.json("user doesnt exist");
    } else {
      res.json("user already exists");
    }
  } catch (err) {
    console.error(err.message, req.body);
    res.json(err.message);
  }
}
