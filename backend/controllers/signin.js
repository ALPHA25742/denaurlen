import user from "../models/user.js";

export default async function signin(req, res) {
  console.log(req.body);
  user
    .findOne({ username: req.body.username })
    .then((userExists) => {
      if (userExists) {
        res.json(userExists);
      } else {
        res.json("user doesnt exists");
      }
    })
    .catch((err) => {
      res.json(err.message);
    });
}
