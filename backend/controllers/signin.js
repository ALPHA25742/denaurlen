import user from "../models/user.js";
import bcrypt from "bcrypt";
import { createToken } from "../app.js";

export default async function signin(req, res) {
  try {
    const existingUser = await user.findOne({ username: req.body.username });
    if (existingUser) {
      const matching = await bcrypt.compare(
        req.body.password,
        existingUser.password
      );
      if (matching) {
        const token = createToken(existingUser._id);
        res.json({ existingUser, token });
      } else res.json("wrong password");
    } else {
      res.json("user doesnt exist");
    }
  } catch (err) {
    res.json(err.message);
  }
}
