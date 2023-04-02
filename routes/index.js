import authenticate from "./authenticate.js";
import anonymous from "./anonymous.js";
import dashboard from "./dashboard.js";

export default (app) => {
  app.use(authenticate);
  app.use(anonymous);
  app.use(dashboard);
};
