import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import signup from "./controllers/signup.js";
import signin from "./controllers/signin.js";
import verifyToken from "./controllers/verifyToken.js";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.listen(3000);
app.use(
  cors({
    //   origin: ["https://legion-code.vercel.app"],
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose
  .connect(process.env.mongodb_atlas_url)
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.post("/signin", signin);
app.post("/signup", signup);
app.get("/verifyToken", verifyToken);

export const createToken = (_id) => {
  return jwt.sign(
    {
      _id,
      // this is payload, which shoudnt contain sensetive data such as passwords
    },
    process.env.SECRET,
    { expiresIn: "3d" }
    //  means expires in 3 days
  );
};
