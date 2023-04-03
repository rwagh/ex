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
  let token = req.cookies.token;
  let result = await helper.exam.list(token);
  res.json(result);
});

export default router;
