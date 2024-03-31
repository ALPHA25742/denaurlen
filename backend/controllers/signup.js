import user from "../models/user.js";
import { createToken } from "../app.js";
import bcrypt from "bcrypt";

export default async function signup(req, res) {
  console.log(req.body);
  user
    .findOne({ email: req.body.email })
    .then((userExists) => {
      if (!userExists) {
        const newUser = new user(req.body);
        newUser
          .save()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err.message, req.body);
            res.json(err.message);
          });
      } else {
        res.json("user already exists");
      }
    })
    .catch((err) => {
      res.json(err.message);
    });
  // const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password, salt);
  // const token = createToken(user._id);
}
