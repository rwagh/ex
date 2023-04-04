import isAuthorized from "../middlewares/authorized.js";
import express from "express";
import helper from "../helpers/index.js";
const router = express.Router();
router.get("/exam/:id", isAuthorized, async (req, res) => {
  try {
    res.render("pages/exam");
  } catch (e) {
    console.log(e);
  }
});

router.post("/update", isAuthorized, async (req, res) => {
  let list = [];
  try {
    let token = req.cookies.token;
    let result = await helper.exam.list(token);
    if (result.error === undefined) {
      list = result.Entities;
    }
  } catch (e) {
    console.log(e);
  }
  res.json(list);
});


export default router;
