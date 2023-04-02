import express from "express";
import env from "dotenv";
import helper from "../helpers/index.js";
env.config();
const router = express.Router();

router.get("/signin", async (req, res) => {
  try {
    res.render("pages/signin", {
      title: "Sign In",
      returnurl: req.query.returnurl,
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

router.get("/forgot", async (req, res) => {
  try {
    res.render("pages/forgot", {
      title: "Forgot Password",
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

router.get("/code", async (req, res) => {
  try {
    res.render("pages/code", {
      title: "Code",
      email: req.query.email,
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

router.post("/forgot", async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let email = req.body.email;
    let result = await helper.forgot.forgot(email, token);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

router.get("/changePwd", async (req, res) => {
  try {
    res.render("pages/changePwd", {
      title: "Change Password",
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

router.post("/password/change", async (req, res) => {
  try {
    let newPassword = req.body.newPassword;
    let confirmPassword = req.body.confirmPassword;
    let token = req.cookies.jwt;
    let result = await helper.password.change(
      newPassword,
      confirmPassword,
      token
    );
    res.json(result);
  } catch (err) {
    throw err;
  }
});

router.post("/password/reset", async (req, res) => {
  try {
    let code = req.body.code;
    let password = req.body.password;
    let token = req.cookies.jwt;
    let result = await helper.password.reset(code, password, token);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

router.post("/signin", async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let result = await helper.signin(username, password);
    res.json(result);
  } catch (e) {
    throw e;
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render(`pages/signup`);
  } catch (e) {
    console.log(e);
  }
});

router.post("/signup", async (req, res) => {
  try {
    let args ={
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
    }
    let result = await helper.signup(args);
    res.json(result);
  } catch (e) {
    throw e;
  }
});


router.get("/signout", async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.redirect(`/signin`);
  } catch (e) {
    console.log(e);
  }
});

export default router;
