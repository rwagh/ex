import env from "dotenv";
env.config();
export default async (req, res, next) => {
  try {
    if (req.cookies !== undefined && req.cookies.token !== undefined) {
      let token = req.cookies.token;
      if (token !== undefined) {
        if (req.path === "/signin") {
          res.redirect(`/dashboard`);
        } else {
          next();
        }
      }
    } else {
      res.redirect(`/signin?returnurl=${req.path}`);
    }
  } catch (e) {
    console.log(e);
  }
};
