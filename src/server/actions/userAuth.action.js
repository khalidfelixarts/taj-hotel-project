"use server";
import { User } from "../db/models/user.schema";
import db from "../db/setupDB";
import bcrypt from "bcryptjs";
import { sendMail } from "../email/nodeMailer";
import { cookies } from "next/headers";

export async function signUpAction(name, email, password) {
  db();
  try {
    let user = await User.findOne({ email });

    if (user) {
      return JSON.stringify({ error: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const newUser = await user.save();

    const link =
      `${process.env.CLIENT_URL}api/verify/${newUser?._id}` ||
      `http://localhost:3000/api/verify/${newUser?._id}`;

    const info = sendMail(email, link);

    return JSON.stringify({
      success: "SignUp Success",
      user: newUser,
      email: info,
    });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function signInAction(email, password) {
  db();
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return JSON.stringify({ error: "Invalid Credentials" });
    }

    if (!user.isVerified) {
      return JSON.stringify({ error: "User is not verified" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return JSON.stringify({ error: "Invalid Credentials" });
    }
    ////////////
    const oneDay = 24 * 60 * 60 * 1000;
    cookies().set("session", "khalid", { oneDay });
    ////////////
    return JSON.stringify({ success: "Login Success", user: user });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}
