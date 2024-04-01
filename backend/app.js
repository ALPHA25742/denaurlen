import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import signup, { check } from "./controllers/signup.js";
import signin from "./controllers/signin.js";
import verifyToken from "./controllers/verifyToken.js";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.listen(3000);
app.use(
  cors({
    origin: [process.env.frontend_url],
    // origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

try {
  const conn = await mongoose.connect(process.env.mongodb_atlas_url);
  if (conn) console.log("connected to db");
} catch (err) {
  console.log(err);
}

app.post("/testing", (req, res) => res.json("working"));
app.post("/signin", signin);
app.post("/signup", signup);
app.get("/verify", verifyToken);
app.post("/check", check);

export const createToken = (_id) => {
  return jwt.sign(
    { _id },
    process.env.SECRET,
    { expiresIn: "3d" }
    //  means expires in 3 days
  );
};
