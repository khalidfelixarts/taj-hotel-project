"use client";
import React, { useState } from "react";
import "./login.scss";
import { signInAction, signUpAction } from "@/server/actions/userAuth.action";
import { useDispatch } from "react-redux";
import { changeUser } from "@/redux-toolkit/reducers/user.reducer";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {!user?._id && (
        <div className="login__window">
          <SignIn />
          <SignUp />
        </div>
      )}
    </>
  );
};

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSignin(e) {
    e.preventDefault();
    let res = await signInAction(email, password);
    res = JSON.parse(res);
    console.log(res);
    if (res.success) toast.success(res.success);
    if (res.error) toast.error(res.error);
    res = res?.user;
    dispatch(changeUser({ user: res }));
  }

  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form onSubmit={handleSignin} className="form">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="input"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="input"
          placeholder="Password"
          required
        />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>
      <p className="sign-up-label">
        Don&apos;t have an account?
        <span className="sign-up-link"> Sign up</span>
      </p>
    </div>
  );
}

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleSignUp(e) {
    e.preventDefault();
    let res = await signUpAction(name, email, password);
    res = JSON.parse(res);
    console.log(res);
    if (res.success) toast.success(res.success);
    if (res.error) toast.error(res.error);
    res = res?.user;
    dispatch(changeUser({ user: res }));
  }

  return (
    <div className="form-container">
      <p className="title">Welcome</p>
      <form onSubmit={handleSignUp} className="form">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="input"
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="input"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="input"
          placeholder="Password"
          required
        />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">
          Sign up
        </button>
      </form>
      <p className="sign-up-label">
        Have an account?
        <span className="sign-up-link"> Log in</span>
      </p>
    </div>
  );
}

export default Login;
