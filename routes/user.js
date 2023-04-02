import express from "express";
import isAuthorized from "../middlewares/authorized.js";
import helper from "../helpers/index.js";
import env from "dotenv";
env.config();
const router = express.Router();

router.get("/users", isAuthorized, async (req, res) => {
  try {
    res.render("pages/users", {
      title: "Users",
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

router.post("/user/add", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let result = await helper.user.add(req.body, token);
    res.json(result);
  } catch (err) {
    helper.error.noDataResponse(err, req, res);
  }
});

router.get("/user/:email", isAuthorized, async (req, res) => {
  let user;
  try {
    let token = req.cookies.jwt;
    let email = req.params.email;
    let result = await helper.user.get(email, token);
    if (result.data && result.data.user) {
      if (result.data.user.success) {
        user = result.data.user.result;
      }
    }
    res.json(user);
  } catch (e) {
    helper.error.noDataResponse(e, req, res);
  }
  
});
router.post("/activeUser", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let result = await helper.user.active(req.body, token);
    res.json(result);
  } catch (err) {
    helper.error.noDataResponse(err, req, res);
  }
});

router.post("/inactiveuser", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let result = await helper.user.inactive(req.body, token);
    res.json(result);
  } catch (err) {
    helper.error.noDataResponse(err, req, res);
  }
});
router.post("/userList", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let result = await helper.user.list(req.body, token);
    res.json(result);
  } catch (err) {
    helper.error.noDataResponse(err, req, res);
  }
});

router.post("/user/update", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    console.log("user.update: ", req.body);
    let result = await helper.user.update(req.body, token);
    res.json(result);
  } catch (e) {
    helper.error.noDataResponse(e, req, res);
  }
});

router.post("/user/delete", isAuthorized, async (req, res) => {
  try {
    let token = req.cookies.jwt;
    let result = await helper.user.delete(req.body, token);
    res.json(result);
  } catch (err) {
    helper.error.noDataResponse(err, req, res);
  }
});

// security roles page
router.get("/system-accounts", async (req, res) => {
  try {
    res.render("pages/system_accounts", {
      title: "System Accounts",
    });
  } catch (err) {
    helper.error.pageNotFound(req, res);
  }
});

export default router;
