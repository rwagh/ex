import isAuthorized from "../middlewares/authorized.js";
import express from "express";
import helper from "../helpers/index.js";
const router = express.Router();
router.get("/dashboard", isAuthorized, async (req, res) => {
  try {
    res.render("pages/dashboard", {
      title: "Dashboard",
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/list", isAuthorized, async (req, res) => {
  let list = [];
  try {
    let token = req.cookies.token;
    let result = await helper.exam.list(token);
    if(result.error === undefined){
      list = result.Entities;
    }
  } catch (e) {
    console.log(e);
  }
  res.json(list);
});
router.post("/get", isAuthorized, async (req, res) => {
  let row = null;
  try {
    let token = req.cookies.token;
    let id = req.body.id;
    let result = await helper.exam.get(token,id);
    if(result.error === undefined){
      row = result.Entity;
    }
  } catch (e) {
    console.log(e);
  }
  res.json(row);
});

export default router;
